import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IReport, IUser } from '@app/models';
import { DataService, FireStoreService } from '@app/services';
import { CommonUtility } from '@app/utilities';
import { SharedModule } from 'app/shared/shared.module';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ReportsComponent extends CommonUtility implements OnInit {

  users: IUser[] = []
  reports: Observable<Array<IReport>>;
  isDataLoadingNow = true;

  constructor(
    private dataService: DataService,
    private router: Router,
    private fireStoreService: FireStoreService,
  ) { super(); }

  ngOnInit(): void {
    this.getAllReportss();

    this.fireStoreService.getAll<IUser>('users').subscribe((res) => {
      this.users = res;
    });
  }

  remove(report: IReport) {
    if (this.isAdmin) {
      this.dataService.softDelete(
        `reports/${report.id}`, { ...report, isAdminRemoved: true }
      );
    }
    if (this.isShopOwner) {
      this.dataService.softDelete(
        `reports/${report.id}`, { ...report, isBrandOwnerRemoved: true }
      );
    }

  }


  getComment(item: IReport) {
    this.setAsSeen(item);
    this.router.navigateByUrl(`app/details/${item.itemId}`);
  }

  setAsSeen(item: IReport): void {
    if (this.isAdmin) {
      this.fireStoreService.updateDocNotifications('reports', item.id, { ...item, isAdminSeen: true });
    }
    if (this.isShopOwner) {
      this.fireStoreService.updateDocNotifications('reports', item.id, { ...item, isBrandOwnerSeen: true });
    }
  }

  private getAllReportss(): void {
    if (this.isAdmin) {
      this.reports = this.fireStoreService.getAll<IReport>('reports').pipe(map((data) => data.filter((report: IReport) => report.isAdminRemoved === false)))
    } else {
      this.reports = this.fireStoreService.getAll<IReport>('reports')
        .pipe(map((data) => data.filter((report: IReport) => report.shopOwnerId === this.userId && report.isBrandOwnerRemoved === false)));
    }
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
