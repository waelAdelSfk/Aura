import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountStatus, Role, subscriptionStatus } from '@app/enums';

import { IUser } from '@app/models';
import { DataService, FireStoreService } from '@app/services';
import { CommonUtility } from '@app/utilities';
import { SharedModule } from 'app/shared/shared.module';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class UsersComponent extends CommonUtility implements OnInit {

  users: Observable<IUser[]>;
  usersCopy: Observable<IUser[]>;

  isDataLoading = false;
  user: IUser;
  defaultImage = 'assets/images/avatar.png';


  accountStatus = AccountStatus;
  subStatus = subscriptionStatus;
  public isCurrentUserInList: boolean = false;

  constructor(
    private fireStoreService: FireStoreService,
    private dataService: DataService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  filter(searchText: string): void {
    this.users = this.usersCopy.pipe(map(users => users.filter(item => item.name.toLocaleLowerCase().indexOf(searchText) !== -1)));
    // console.log('searchText', searchText);
  }


  viewDetails(user: IUser): void {
    this.router.navigateByUrl(`app/offer/${user.id}`);
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


  private getAllUsers(): void {
    if (this.isAdmin) {
      this.users = this.usersCopy = this.fireStoreService.getAll<IUser>('users').pipe(map((users: IUser[]) =>
        users.filter(user => user.role === Role.shopOwner))
      );
    } else {
      this.users = this.usersCopy = this.fireStoreService.getAll<IUser>('users').pipe(map((users: IUser[]) =>
        users.filter(user => user.role === Role.shopOwner && user.status === AccountStatus.approved))
      );
    }
  }

  isUserInList(user: IUser): boolean {
    return user.subscriberList?.some(u => u.userId === this.userId);
  }

  subscribe(user: IUser): void {
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

}

