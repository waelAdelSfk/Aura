import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IReport, IUser } from '@app/models';
import { DataService, FireStoreService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class FeedbackComponent implements OnInit {

  users: IUser[] = []
  reports: Observable<Array<IReport>>;
  isDataLoadingNow = true;

  constructor(
    private dataService: DataService,
    private router: Router,
    private fireStoreService: FireStoreService
  ) { }

  ngOnInit(): void {
    this.getAllFeedbacks();

    this.fireStoreService.getAll<IUser>('users').subscribe((res) => {
      this.users = res;
    });
  }

  // async remove(feedback: IReport): Promise<void> {
  //   await this.fireStoreService.delete('feedback', feedback.id);
  // }

  remove(feedback: IReport): void {
    this.dataService.remove(`categories/${feedback.id}`);
  }


  getComment(item: IReport) {
    this.router.navigateByUrl(`app/details/${item.itemId}`);
    this.updateNotificationCount(item);
  }

  updateNotificationCount(item: IReport): void {
    this.fireStoreService.updateDocNotifications('feedback', item.id, { ...item, isAdminSeen: true });
  }

  private getAllFeedbacks(): void {
    this.reports = this.fireStoreService.getAll('feedback')
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

}
