import { Component, OnInit } from '@angular/core';

import { NotificationType } from '@app/enums';
import { INotification, INotificationViewModel, IUser } from '@app/models';
import { AlertService, FireStoreService, TranslationService } from '@app/services';
import { CommonUtility } from '@app/utilities';
import { ToastService } from 'app/shared/services/toast.service';
import { UsersService } from 'app/shared/services/users.service';
import { SharedModule } from 'app/shared/shared.module';

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

  constructor(
    private fireStoreService: FireStoreService,
    private translationService: TranslationService,
    private toastService: ToastService,
    private alertService: AlertService,
    private usersService: UsersService
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
        isUserSeen: this.isAdmin ? notification.isUserSeen : !notification.isUserSeen
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
    const updatedNotification: Partial<INotification> = {
      isAdminRemoved: this.isAdmin ? !notification.isAdminRemoved : notification.isAdminRemoved,
      isUserRemoved: this.isAdmin ? notification.isUserRemoved : !notification.isUserRemoved
    };
    this.alertService.create({
      confirmHandler: () =>
        this.fireStoreService.updateDoc(`notifications/${notification.id}`, updatedNotification).subscribe(() => {
          this.toastService.showToaster(this.getTranslateValue('notificationRemovedSuccessfully'));
        })
    });
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
        this.notifications = notifications.filter(n => n.userId === this.userId && !n.isAdminRemoved).map(n => ({
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
}
