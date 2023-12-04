import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationType } from '@app/enums';
import { INotification, INotificationViewModel, IOffers, IUser } from '@app/models';
import { AlertService, FireStoreService, TranslationService } from '@app/services';
import { CommonUtility } from '@app/utilities';
import { ToastService } from 'app/shared/services/toast.service';
import { UsersService } from 'app/shared/services/users.service';
import { SharedModule } from 'app/shared/shared.module';
import { map } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class NotificationsComponent extends CommonUtility implements OnInit {

  notifications: Array<INotificationViewModel> = [];
  notificationType = NotificationType;
  offers: IOffers;

  constructor(
    private fireStoreService: FireStoreService,
    private translationService: TranslationService,
    private toastService: ToastService,
    private alertService: AlertService,
    private usersService: UsersService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.getAllNotifications();
  }

  markAsSeen(notification: INotificationViewModel): void {
    if ((this.isAdmin && !notification.isAdminSeen)) {
      const updatedNotification: Partial<INotification> = {
        isAdminSeen: this.isAdmin ? !notification.isAdminSeen : notification.isAdminSeen,
        isUserSeen: this.isUser ? notification.isUserSeen : !notification.isUserSeen
      };
      this.fireStoreService.updateDoc(`notifications/${notification.id}`, updatedNotification).subscribe(() => {
        this.toastService.showToaster(this.getTranslateValue('updatedSuccessfully'));
      });
    } else if (this.isUser && !notification.isUserSeen) {
      const updatedNotification: Partial<INotification> = {
        isUserSeen: !notification.isUserSeen
      };
      this.fireStoreService.updateDoc(`notification/${notification.id}`, updatedNotification).subscribe(() => {
        this.toastService.showToaster(this.getTranslateValue('updatedSuccessfully'));
      });
    }
  }

  delete(notification: INotificationViewModel): void {
    const adminUpdatedNotification: Partial<INotification> = {
      isAdminRemoved: this.isAdmin ? !notification.isAdminRemoved : notification.isAdminRemoved,
    };
    const userUpdatedNotification: Partial<INotification> = {
      // isAdminRemoved: this.isAdmin ? !notification.isAdminRemoved : notification.isAdminRemoved,
      isUserRemoved: this.isUser ?? notification.isUserRemoved,
    };
    if (this.isAdmin) {
      this.alertService.create({
        confirmHandler: () =>
          this.fireStoreService.updateDoc(`notifications/${notification.id}`, adminUpdatedNotification).subscribe(() => {
            this.toastService.showToaster(this.getTranslateValue('notificationRemovedSuccessfully'));
          })
      });
    } else if (this.isUser) {
      this.alertService.create({
        confirmHandler: () =>
          this.fireStoreService.updateDoc(`notification/${notification.id}`, userUpdatedNotification).subscribe(() => {
            this.toastService.showToaster(this.getTranslateValue('notificationRemovedSuccessfully'));
          })
      });
    }

  }

  private getAllNotifications(): void {
    if (this.isAdmin) {
      const emailField: keyof IUser = 'email';
      const imageField: keyof IUser = 'image';
      this.fireStoreService.getAll<INotification>('notifications').subscribe(notifications => {
        this.notifications = notifications.filter(n => this.isAdmin ? !n.isAdminRemoved : !n.isUserRemoved).map(n => ({
          ...n,
          userName: this.usersService.getUserPropById(n.userId),
          email: this.usersService.getUserPropById(n.userId, emailField),
          image: this.usersService.getUserPropById(n.userId, imageField),
          cssClass: this.getCssClass(n)
        })).sort((a, b) => b.date.toMillis() - a.date.toMillis());
      });
    } else {
      const emailField: keyof IUser = 'email';
      const imageField: keyof IUser = 'image';
      this.fireStoreService.getAll<INotification>('notification').subscribe(notifications => {
        this.notifications = notifications.filter(n => n.userId === this.userId && !n.isUserRemoved).map(n => ({
          ...n,
          userName: this.usersService.getUserPropById(n.userId),
          email: this.usersService.getUserPropById(n.userId, emailField),
          image: this.usersService.getUserPropById(n.userId, imageField),
          cssClass: this.getCssClass(n)
        })).sort((a, b) => b.date.toMillis() - a.date.toMillis());

      })
    }

  }

  private getTranslateValue(key: string): string {
    return this.translationService.instant(key);
  }

  private getCssClass(notification: INotification): string {
    const isSeen = this.isAdmin ? notification.isAdminSeen : notification.isUserSeen;
    return isSeen ? 'seen' : 'not-seen';
  }

  viewDetails(offerId: string): void {
    this.fireStoreService.getAll('offersList')
      .pipe(map((data: IOffers[]) => data.find(o => o.id === offerId))).subscribe(res => {
        this.offers = res
        this.router.navigate([`/app/details/${this.offers.id}`]);
      });
  }
}
