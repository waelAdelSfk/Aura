import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { RatingComponent } from "../rating/rating.component";
import { IFavorite, IOffers, IUser } from '@app/models';
import { ActivatedRoute } from '@angular/router';
import { AlertService, DataService, FireStoreService, LoadingService, UsersService } from '@app/services';
import { Observable, map, take } from 'rxjs';
import { subscriptionStatus } from '@app/enums';
import { FavoriteService } from 'app/shared/services/favorite.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [SharedModule, RatingComponent]
})
export class DetailsComponent implements OnInit {


  offers: IOffers;
  isFavorite = false;
  itemFavorite: IFavorite;
  subStatus = subscriptionStatus;
  users: Observable<IUser[]>;
  public userId: string;
  // subUsers: IUser[];
  // ownerUsers: IUser[];
  // userIsSubscribed: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fireStoreService: FireStoreService,
    private dataService: DataService,
    private loadingService: LoadingService,
    private favoriteService: FavoriteService,
    private alertService: AlertService,
    private usersService: UsersService,
  ) { }

  get offerId(): string {
    return this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {

    this.getAllOffers();
    this.getCurrentUserId();
    this.getFavoriteItem();
    this.users = this.fireStoreService.getAll<IUser>('users');
    // console.log('sub', this.userIsSubscribed)
    // const restaurantId = route.paramMap.get('id');
    //  this.fireStoreService.getById<IOffers>(`restaurants/${restaurantId}`);
    // this.owner = this.fireStoreService.getAll<IUser>('users').pipe(map(data => data.find(user => user.id)))
    // this.offers = this.fireStoreService.getById<IOffers>(`offers/${this.offerId}`);
    // this.restaurant = this.activatedRoute.snapshot.data['restaurant'];
    // console.log('this Restaurant', this.restaurant);
    //   this.fireStoreService.getAll<IManage>('cities').subscribe((city: IManage[]) => {
    //     this.cities = city;
    //   });
  }

  private getAllOffers(): void {

    this.fireStoreService.getAll('offersList')
      .pipe(map((data: IOffers[]) => data.find(o => o.id === this.offerId)
        // .sort(
        //   (a, b) => a.number - b.number
        // )
      )).subscribe(res => {
        this.offers = res
      });

    // this.offers = this.fireStoreService.getAll('offers')
    // .pipe(map((res: IOffers[]) => res.filter((data) => data.id === this.offerId)))


    // this.fireStoreService.getById(`ofeers`).subscribe((res: Array<IOffers>) => {
    //   this.offers = res.filter(data => data.id === this.offerId);
    // })
  }

  addToFavorite(): void {
    this.loadingService.create().then(async (loading: HTMLIonLoadingElement) => {
      const Favorite: Partial<IFavorite> = {
        userId: this.userId,
        itemId: this.offerId
      };
      this.favoriteService.create(Favorite).subscribe((() => {
        this.getFavoriteItem();
        loading.dismiss();
      }));
      console.log('fav', Favorite)
    });
  }



  private getCurrentUserId(): void {
    this.usersService.getCurrentLoggedInUser().subscribe(res => {
      if (res && res.uid) {
        this.userId = res.uid;
        this.getFavoriteItem();
      }
    });
  }

  getFavoriteItemById(restaurantId: string): Observable<IFavorite[]> {
    return this.fireStoreService.getAll<IFavorite>('favorite').pipe(
      map((favorites: IFavorite[]) => {
        return favorites.filter(item => item.itemId === restaurantId && item.userId === this.userId);
      })
    );
  }

  private getFavoriteItem(): void {
    if (this.userId) {
      this.favoriteService.getFavoriteItemById(this.offerId).subscribe(res => {
        this.itemFavorite = res;
        this.isFavorite = res ? true : false;
        console.log('fav', this.isFavorite)
      });
    }
  }

  removeFromFavorite(): void {
    this.alertService.create({
      confirmHandler: () => {
        this.loadingService.create().then(async (loading: HTMLIonLoadingElement) => {
          if (this.itemFavorite) {
            this.favoriteService.remove(this.itemFavorite.id).subscribe(() => {
              loading.dismiss();
              this.getFavoriteItem();
            })
          }
        });
      }
    });
  }

  getCityName(id: string): string {
    // if (this.cities?.length > 0) {
    //   if (id && id != '' && id != null) {
    //     const cityName = this.cities.find(m => m.id == id);
    //     return cityName ? this.isArabic ? cityName.nameAr : cityName.nameEn : 'x';
    //   }
    //   return 'xx';
    // }
    return 'xxx';
  }


  // subscribe(user: IUser): void {
  //   if (this.isUserInList(user)) {
  //     const userIndex = user.subscriberList.findIndex(u => u.userId === this.userId);
  //     user.subscriberList[userIndex].subStatus = this.subStatus.subscribe;
  //     this.dataService.update(`/${'users'}/${user.id}`, { ...user });
  //   }

  // toggleSubscription(shopOwnerId: string): void {
  //   if (this.userIsSubscribed) {
  //     this.unsubscribe(shopOwnerId);
  //   } else {
  //     this.subscribe(shopOwnerId);
  //   }
  //   this.userIsSubscribed = !this.userIsSubscribed;
  // }



  subscribe(shopOwnerId: string): void {
    this.users.pipe(take(1)).subscribe((users: IUser[]) => {
      const ownerId = users.find(u => u.id === shopOwnerId);
      if (ownerId) {
        if (!this.isUserInList(ownerId)) {
          const addUserToSubscribeList = { userId: this.userId, subStatus: this.subStatus.subscribe };
          if (!ownerId.subscriberList) {
            ownerId.subscriberList = [];
          }
          ownerId.subscriberList.push(addUserToSubscribeList);
        } else {
          const userIndex = ownerId.subscriberList.findIndex(u => u.userId === this.userId);
          ownerId.subscriberList[userIndex].subStatus = this.subStatus.subscribe;
        }
        this.dataService.update(`users/${ownerId.id}`, { ...ownerId });
        // console.log('sub', this.userIsSubscribed)
      }
      // this.userIsSubscribed = true;
    });
  }



  unsubscribe(shopOwnerId: string): void {
    this.alertService.create({
      confirmHandler: () => {
        this.loadingService.create().then(async (loading: HTMLIonLoadingElement) => {
          this.users.pipe(take(1)).subscribe((users: IUser[]) => {
            const user = users.find(u => u.id === shopOwnerId);
            if (user && user.subscriberList) {
              const userIndex = user.subscriberList.findIndex(u => u.userId === this.userId);
              if (userIndex !== -1 && user.subscriberList[userIndex].subStatus === this.subStatus.subscribe) {
                user.subscriberList[userIndex].subStatus = this.subStatus.unSubscribe;
                this.dataService.update(`users/${user.id}`, { ...user });
                loading.dismiss();
              }
              // console.log('sub', this.userIsSubscribed)
            }
            // this.userIsSubscribed = false;
          });

        });
      }
    });


  }

  // checkSubscriptionStatus(shopOwnerId: string): void {
  //   const user = this.subUsers.find((u) => u.id === shopOwnerId);
  //   if (user && user.subscriberList) {
  //     const isSubscribed = user.subscriberList.some((sub) => sub.userId === this.userId && sub.subStatus === this.subStatus.subscribe);
  //     this.userIsSubscribed = isSubscribed;
  //   }
  //   console.log('sub', this.userIsSubscribed)
  // }

  // isUserInList(user: IUser): boolean {
  //   return user.subscriberList?.some(u => u.userId === this.userId);
  // }

  isUserInList(user: IUser): boolean {
    return user.subscriberList?.some(u => u.userId === this.userId);
  }

  // isSubUserNotInList(shopOwnerId: string): boolean {
  //   return this.ownerUsers?.some(u => u.id === shopOwnerId && u.subscriberList?.some
  //     (sub => sub.userId === this.userId && sub.subStatus === this.subStatus.unSubscribe));
  // }


  // isSubUserInList(shopOwnerId: string): boolean {
  //   return this.ownerUsers?.some(u => u.id === shopOwnerId && u.subscriberList?.some
  //     (sub => sub.userId === this.userId && sub.subStatus === this.subStatus.subscribe));
  // }


  // getUserStatus(user: IUser): number {
  //   const userStatusChanges = user.subscriberList || [];
  //   const userStatus = userStatusChanges.find(u => u.userId === this.userId);
  //   return userStatus ? userStatus.subStatus : undefined;
  // }


  // unsubscribe(user: IUser): void {
  //   const isUserInList = user.subscriberList.find((u) => u.userId === this.userId && u.subStatus === this.subStatus.subscribe);
  //   if (isUserInList) {
  //     isUserInList.subStatus = this.subStatus.unSubscribe
  //     this.dataService.update(`/${'users'}/${user.id}`, { ...user });
  //   }
  // }






  //   if (!this.isUserInList(user)) {
  //     const addUserToSubscribeList = { userId: this.userId, subStatus: this.subStatus.subscribe };
  //     user.subscriberList.push(addUserToSubscribeList);
  //     this.dataService.update(`/${'users'}/${user.id}`, { ...user });
  //   }
  // }
}
