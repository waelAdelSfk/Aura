import { Component, OnInit } from '@angular/core';
import { AccountStatus, Role, subscriptionStatus } from '@app/enums';

import { IUser } from '@app/models';
import { DataService, FireStoreService } from '@app/services';
import { CommonUtility } from '@app/utilities';
import { SharedModule } from 'app/shared/shared.module';
import { Observable, map } from 'rxjs';
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
export class UsersComponent extends CommonUtility implements OnInit {

  // users: Array<IUser> = [];
  users: Observable<IUser[]>;
  usersCopy: Observable<IUser[]>;
  // usersCopy: Array<IUser> = [];

  // userId: string;
  isDataLoading = false;
  isDataLoadingNow = true;
  // destroyed = new Subject();
  // users: User[] = [];
  // searchUsers: User[] = [];
  defaultImage = 'assets/images/avatar.png';


  accountStatus = AccountStatus;
  subStatus = subscriptionStatus;

  constructor(
    private fireStoreService: FireStoreService,
    private dataService: DataService,
    // private toastService: ToastService,
    // private firebaseService: FirebaseService,
    // private navigationService: NavigationService,
    // private usersService: UsersService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getAllUsers();
    // this.getUsersByRole();
    // this.FireStoreService.getAll<IUser>('users').subscribe(users => {
    //   this.users = users;
    // });
  }

  // chat(user: IUser): void {
  //   // this.navigationService.navigateDependOnRole(`${Constants.Routes.chat}/${user.id}`);
  // }

  async remove(user: IUser): Promise<void> {
    // await this.firebaseService.delete(Constants.FirebaseCollection.users, user.id);
  }

  filter(searchText: string): void {
    // this.users = this.usersCopy.pipe(map(users => users.filter(item => item.userName.toLocaleLowerCase().indexOf(searchText) !== -1)));
  }

  seeDetails(user: IUser): void {
    // this.navigationService.navigateDependOnRole(`${Constants.Routes.users}/${user.id}`);
  }

  approved(user: IUser): void {
    // this.firebaseService.updateDoc(Constants.FirebaseCollection.users, user.id, {
    //   ...user,
    //   accountActivity: this.accountStatus.Approved,
    // });
  }

  block(user: IUser): void {
    // this.firebaseService.updateDoc(Constants.FirebaseCollection.users, user.id, {
    //   ...user,
    //   accountActivity: this.accountStatus.Blocked,
    // });
  }

  pending(user: IUser): void {
    // this.firebaseService.updateDoc(Constants.FirebaseCollection.users, user.id, {
    //   ...user,
    //   accountActivity: this.accountStatus.Pending,
    // });
  }


  //   this.FireStoreService.getAll<IUser>('users').subscribe(users => {
  //     this.users = users;



  private getAllUsers(): void {
    // this.users = this.fireStoreService.getAll<IUser>('users').pipe(map((users: IUser[]) =>
    //   users.filter((user) => {
    //     if (user && user != undefined && user != null) {
    //       user.role === Role.shopOwner
    //     }
    //   })));

    this.users = this.fireStoreService.getAll<IUser>('users').pipe(map((users: IUser[]) =>
      users.filter(user => user.role === Role.shopOwner))
    );
    // this.users.subscribe(res => {
    //   res.forEach(item => {
    //     console.log('item', item.subscriberList.length);
    //   })
    // })
  }

  subscribe(user: IUser): void {
    const addUserToSubscribeList = { userId: this.userId, subStatus: this.subStatus.subscribe };
    if (user.subscriberList) {
      const isUserInList = user.subscriberList.find((u) => u.userId === this.userId && u.subStatus === this.subStatus.unSubscribe);
      if (isUserInList) {
        isUserInList.subStatus = this.subStatus.subscribe
      } else {
        user.subscriberList.push(addUserToSubscribeList);
      }
    }
    this.dataService.update(`/${'users'}/${user.id}`, { ...user })
    // this.toastService.showToaster('subscribe');
  }


  unsubscribe(user: IUser): void {
    const isUserInList = user.subscriberList.find((u) => u.userId === this.userId && u.subStatus === this.subStatus.subscribe);
    if (isUserInList) {
      isUserInList.subStatus = this.subStatus.unSubscribe
      this.dataService.update(`/${'users'}/${user.id}`, { ...user });
    }
  }

  getUserStatus(user: IUser): number {
    const userStatusChanges = user.subscriberList || [];
    const userStatus = userStatusChanges.find(u => u.userId === this.userId);
    return userStatus ? userStatus.subStatus : undefined;
  }




  // private getAllUsers(): void {
  //   this.FireStoreService.getAll<IUser>('users')
  //     .pipe(map((users: IUser[]) => {
  //       return users.filter(user => user.role === 3);
  //     })
  //     )
  //     .subscribe((filteredUsers: IUser[]) => {
  //       this.users = filteredUsers;
  //     });
  // }

}

