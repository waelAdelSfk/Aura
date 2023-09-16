import { CommonUtility } from '@app/utilities';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

import { SharedModule } from 'app/shared/shared.module';
import { INotification } from '@app/models';
import { FireStoreService } from '@app/services';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class TabsComponent extends CommonUtility implements OnInit {

  notifications: Observable<Array<INotification>>;

  constructor(private router: Router, private fireStoreService: FireStoreService) {
    super();
  }

  ngOnInit(): void {
   this.getNotifications();
  }

  isTabSelected(tab: string): boolean {
    return this.router.isActive(`app/${tab}`, { paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored' });;
  }

  private getNotifications(): void {
    if (this.userId) {
      if (this.isAdmin) {
        this.notifications = this.fireStoreService.getAll<INotification>('notifications').pipe(
          map(notifications => notifications.filter(n => !n.isAdminSeen && !n.isAdminRemoved)));
      } else {
        const allNotifications = this.fireStoreService.getUserNotifications(this.userId);
        this.notifications = allNotifications.pipe(map(notifications => notifications.filter(n => !n.isUserSeen && !n.isUserRemoved)));
      }
    }
  }
}
