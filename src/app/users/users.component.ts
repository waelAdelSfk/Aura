import { Component, OnInit } from '@angular/core';

import { IUser } from '@app/models';
import { FireStoreService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';
// import { AlertController, ModalController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';
// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { User, UserDto } from 'src/app/shared/models/user';
// import { AdminService } from 'src/app/shared/services/admin.service';
// import { UtilityService } from 'src/app/shared/services/utility.service';
// import { UserDetailsPage } from '../user-details/user-details.page';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class UsersComponent implements OnInit {

  users: Array<IUser> = [];

  // userId: string;
  // isDataLoading = false;
  // destroyed = new Subject();
  // users: User[] = [];
  // searchUsers: User[] = [];
  // defaultImage = 'assets/images/avatar.png';


  constructor(
    private FireStoreService: FireStoreService
  //   private adminService: AdminService,
  //   public modalController: ModalController,
  //   private alertController: AlertController,
  //   private translateService: TranslateService,
  //   private utilityService: UtilityService

    ) { }

  ngOnInit(): void {
    this.FireStoreService.getAll<IUser>('users').subscribe(users => {
      this.users = users;
    });
  }

  seeDetails(user: IUser): void {

  }

  // ionViewWillEnter(): void {
  //   this.utilityService.showLoading().then((loading: any) => {
  //     this.getData();
  //     loading.dismiss();
  //   });
  // }



  // cancelSearch(): void {
  //   this.getData();
  // }

  // async showUserDetails(user: User): Promise<void> {
  //   const modal = await this.modalController.create({
  //     component: UserDetailsPage,
  //     componentProps: {
  //       currentUser: user
  //     }
  //   });
  //   return await modal.present();
  // }


  // async deleteUser(user: User): Promise<void> {
  //   const alert = await this.alertController.create({
  //     mode: 'ios',
  //     header: this.translateService.instant('confirmDelete'),
  //     message: this.translateService.instant('areYouSureYouWantToDelete'),
  //     buttons: [
  //       {
  //         text: this.translateService.instant('okay'),
  //         handler: () => {
  //           this.utilityService.showLoading().then((loading: any) => {
  //             this.adminService.removeUser(user.userId).then(() => {
  //               this.utilityService.showServerMessage(this.translateService.instant('removedSuccessfully'), 'success');
  //               this.getData();
  //               loading.dismiss();
  //               }).catch((err) => {
  //                 loading.dismiss();
  //                 this.utilityService.showServerMessage(err.message, 'danger');
  //               });
  //           });

  //         }
  //       },
  //       {
  //         text: this.translateService.instant('cancel'),
  //         role: 'cancel',
  //         handler: () => {}
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  // filterUsers(searchText: string): void {
  //   if (searchText !== '') {
  //     this.users = this.searchUsers.filter(com => com.name.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1);
  //   } else {
  //     this.ionViewWillEnter();
  //   }
  // }

  // refreshPage(event: any): void {
  //   this.isDataLoading = false;
  //   this.users = [];
  //   this.searchUsers = [];
  //   this.getData(event);
  // }

  // private getData(event?: any): void {
  //   this.adminService.getAllUsers().subscribe((res: UserDto[]) => {
  //     if (res.length > 0) {
  //       this.users = [];
  //       this.searchUsers = [];
  //       res.filter(u => u.data.email != 'admin@admin.com').map((item: UserDto) => {
  //         const usr: User = {
  //           userId: item.data.userId,
  //           email: item.data.email,
  //           name: item.data.name,
  //           mobile: item.data.mobile,
  //           image: item.data.image,
  //           latitude: item.data.latitude,
  //           createdAt: item.data.createdAt,
  //           longitude: item.data.latitude,
  //           role: item.data.role
  //         };
  //         this.users.push(usr);
  //         this.searchUsers = this.users;
  //       });
  //       this.isDataLoading = true;
  //       if (event) {
  //         event.target.complete();
  //       }
  //     }
  //   });
  // }


}
