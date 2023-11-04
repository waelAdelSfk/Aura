import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  // destroyed = new Subject();
  user: IUser;
  // searchUsers: User[] = [];
  defaultImage = 'assets/images/avatar.png';


  accountStatus = AccountStatus;
  subStatus = subscriptionStatus;
  public isCurrentUserInList: boolean = false;
  // public isUserInList: boolean = false;

  constructor(
    private fireStoreService: FireStoreService,
    private dataService: DataService,
    private router: Router
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

  // async remove(user: IUser): Promise<void> {
  //   // await this.firebaseService.delete(Constants.FirebaseCollection.users, user.id);
  // }

  filter(searchText: string): void {
    // this.users = this.usersCopy.pipe(map(users => users.filter(item => item.userName.toLocaleLowerCase().indexOf(searchText) !== -1)));
  }

  seeDetails(user: IUser): void {
    // this.navigationService.navigateDependOnRole(`${Constants.Routes.users}/${user.id}`);
  }

  viewDetails(user: IUser): void {
    // if (this.user) {
    // if (this.element.type === 'restaurant') {
    this.router.navigateByUrl(`app/offer/${user.id}`);
    console.log('clicked')
    // } else if (this.element.type === 'place') {
    // this.router.navigateByUrl(`app/place/${this.element.id}`);
    // }
    // }
  }

  remove(user: IUser): void {
    this.dataService.remove(`users/${user.id}`);
  }

  approved(user: IUser): void {
    this.dataService.update(`users/${user.id}`, {
      ...user,
      status: AccountStatus.approved,
    });
  }

  block(user: IUser): void {
    this.dataService.update(`users/${user.id}`, {
      ...user,
      status: AccountStatus.blocked,
    });
  }

  pending(user: IUser): void {
    this.dataService.update(`users/${user.id}`, {
      ...user,
      status: AccountStatus.pending,
    });
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

    if (this.isAdmin) {
      this.users = this.fireStoreService.getAll<IUser>('users').pipe(map((users: IUser[]) =>
        users.filter(user => user.role === Role.shopOwner))
      );
    } else {
      this.users = this.fireStoreService.getAll<IUser>('users').pipe(map((users: IUser[]) =>
        users.filter(user => user.role === Role.shopOwner && user.status === AccountStatus.approved))
      );
    }


    // this.users.subscribe(res => {
    //   res.forEach(item => {
    //     console.log('item', item.subscriberList.length);
    //   })
    // })
  }

  isUserInList(user: IUser): boolean {
    return user.subscriberList?.some(u => u.userId === this.userId);
  }

  subscribe(user: IUser): void {
    // if (!user.subscriberList) {
    //   user.subscriberList = [];
    // }
    if (this.isUserInList(user)) {
      const userIndex = user.subscriberList.findIndex(u => u.userId === this.userId);
      user.subscriberList[userIndex].subStatus = this.subStatus.subscribe;
      this.dataService.update(`/${'users'}/${user.id}`, { ...user });
    }

    if (!this.isUserInList(user)) {
      const addUserToSubscribeList = { userId: this.userId, subStatus: this.subStatus.subscribe };
      user.subscriberList.push(addUserToSubscribeList);
      this.dataService.update(`/${'users'}/${user.id}`, { ...user });
    }
    // else {
    //   const userIndex = user.subscriberList.findIndex(u => u.userId === this.userId);
    //   if (userIndex !== -1) {
    //     user.subscriberList[userIndex].subStatus = this.subStatus.subscribe;
    //   }
    //   this.dataService.update(`/${'users'}/${user.id}`, { ...user });
    // }
  }




  // subscribe(user: IUser): void {
  //   // this.isCurrentUserInList = user.subscriberList.some(a => a.userId === this.userId);
  //   const addUserToSubscribeList = { userId: this.userId, subStatus: this.subStatus.subscribe };
  //   if (user.subscriberList) {
  //     this.isUserInList = user.subscriberList.some((u) => u.userId === this.userId);
  //     if (this.isUserInList === true) {
  //       this.subStatus.subscribe
  //     } else {
  //       user.subscriberList.push(addUserToSubscribeList);
  //     }
  //   }
  //   this.dataService.update(`/${'users'}/${user.id}`, { ...user })
  // }


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

