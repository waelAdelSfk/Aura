import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IReport, IUser } from '@app/models';
import { DataService, FireStoreService } from '@app/services';
import { CommonUtility } from '@app/utilities';
import { SharedModule } from 'app/shared/shared.module';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class FeedbackComponent extends CommonUtility implements OnInit {

  users: IUser[] = []
  reports: Observable<Array<IReport>>;
  isDataLoadingNow = true;

  constructor(
    private dataService: DataService,
    private router: Router,
    private fireStoreService: FireStoreService,
  ) { super(); }

  ngOnInit(): void {
    this.getAllFeedbacks();

    this.fireStoreService.getAll<IUser>('users').subscribe((res) => {
      this.users = res;
    });
  }

  // async remove(feedback: IReport): Promise<void> {
  //   await this.fireStoreService.delete('feedback', feedback.id);
  // }

  remove(feedback: IReport) {
    if (this.isAdmin) {
      this.dataService.softDelete(
        `feedback/${feedback.id}`, { ...feedback, isAdminRemoved: true }
      );
    }
    if (this.isShopOwner) {
      this.dataService.softDelete(
        `feedback/${feedback.id}`, { ...feedback, isBrandOwnerRemoved: true }
      );
    }

  }


  getComment(item: IReport) {
    this.setAsSeen(item);
    this.router.navigateByUrl(`app/details/${item.itemId}`);
  }

  setAsSeen(item: IReport): void {
    if (this.isAdmin) {
      this.fireStoreService.updateDocNotifications('feedback', item.id, { ...item, isAdminSeen: true });
    }
    if (this.isShopOwner) {
      this.fireStoreService.updateDocNotifications('feedback', item.id, { ...item, isBrandOwnerSeen: true });
    }
  }

  private getAllFeedbacks(): void {
    if (this.isAdmin) {
      this.reports = this.fireStoreService.getAll<IReport>('feedback').pipe(map((data) => data.filter((report: IReport) => report.isAdminRemoved === false)))
    } else {
      this.reports = this.fireStoreService.getAll<IReport>('feedback')
        .pipe(map((data) => data.filter((report: IReport) => report.shopOwnerId === this.userId && report.isBrandOwnerRemoved === false)));
    }
    // this.reports = this.fireStoreService.getAll('feedback').
    //   subscribe(res => res.filter((report: IReport) => report.shopOwnerId === this.userId));

    this.isDataLoadingNow = false;
  }

  getUserName(id: string): string {
    if (this.users?.length > 0) {
      if (id && id != '' && id != null) {
        const user = this.users.find(user => user.id === id);
        return user ? user.name : 'x';
      }
      return 'xx';
    }
    return 'xxx';
  }

  getClassNames(item: IReport): string {
    if (this.isAdmin) {
      return item.isAdminSeen ? 'seen' : 'not-seen'
    } else {
      return item.isBrandOwnerSeen ? 'seen' : 'not-seen'
    }
    // return (item.isAdminSeen ? 'admin-seen' : 'admin-not-seen') + ' ' +
    //   (item.isBrandOwnerSeen ? 'brand-owner-seen' : 'brand-owner-not-seen');
  }

}
