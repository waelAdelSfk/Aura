import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { RatingComponent } from "../rating/rating.component";
import { IFavorite, IOffers, IUser } from '@app/models';
import { ActivatedRoute } from '@angular/router';
import { AlertService, DataService, FireStoreService, LoadingService, ModalService, UsersService } from '@app/services';
import { Observable, map, take } from 'rxjs';
import { subscriptionStatus } from '@app/enums';
import { FavoriteService } from 'app/shared/services/favorite.service';
import { CommonUtility } from '@app/utilities';
import { AddFeedbackComponent } from 'app/feedback/add-feedback/add-feedback.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [SharedModule, RatingComponent]
})
export class DetailsComponent extends CommonUtility implements OnInit {


  offers: IOffers;
  isFavorite = false;
  itemFavorite: IFavorite;
  subStatus = subscriptionStatus;
  users: Observable<IUser[]>;
  public currentUser: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fireStoreService: FireStoreService,
    private dataService: DataService,
    private loadingService: LoadingService,
    private favoriteService: FavoriteService,
    private alertService: AlertService,
    private usersService: UsersService,
    private modalService: ModalService,
  ) { super(); }

  get offerId(): string {
    return this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getAllOffers();
    this.getCurrentUserId();
    this.getFavoriteItem();
    this.users = this.fireStoreService.getAll<IUser>('users');
  }

  private getAllOffers(): void {

    this.fireStoreService.getAll('offersList')
      .pipe(map((data: IOffers[]) => data.find(o => o.id === this.offerId))).subscribe(res => {
        this.offers = res
      });
  }

  remove(): void {
    this.dataService.remove(`offersList/${this.offerId}`)
  }

  async report(): Promise<void> {
    const modal = await this.modalService.create({
      component: AddFeedbackComponent,
      componentProps: {
        itemId: this.offerId,
        // message: item.message,
        shopOwner: this.offers.shopOwnerId,
        // userId: this.currentUser
      },
    });
    await modal.present();
  }
  addToFavorite(): void {
    this.loadingService.create().then(async (loading: HTMLIonLoadingElement) => {
      const Favorite: Partial<IFavorite> = {
        userId: this.currentUser,
        itemId: this.offerId
      };
      this.favoriteService.create(Favorite).subscribe((() => {
        this.getFavoriteItem();
        loading.dismiss();
      }));
      console.log('fav', Favorite);
    });
  }

  private getCurrentUserId(): void {
    this.usersService.getCurrentLoggedInUser().subscribe(res => {
      if (res && res.uid) {
        this.currentUser = res.uid;
        this.getFavoriteItem();
      }
    });
  }

  getFavoriteItemById(restaurantId: string): Observable<IFavorite[]> {
    return this.fireStoreService.getAll<IFavorite>('favorite').pipe(
      map((favorites: IFavorite[]) => {
        return favorites.filter(item => item.itemId === restaurantId && item.userId === this.currentUser);
      })
    );
  }

  private getFavoriteItem(): void {
    if (this.currentUser) {
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



  subscribe(shopOwnerId: string): void {
    this.users.pipe(take(1)).subscribe((users: IUser[]) => {
      const ownerId = users.find(u => u.id === shopOwnerId);
      if (ownerId) {
        if (!this.isUserInList(ownerId)) {
          const addUserToSubscribeList = { userId: this.currentUser, subStatus: this.subStatus.subscribe };
          if (!ownerId.subscriberList) {
            ownerId.subscriberList = [];
          }
          ownerId.subscriberList.push(addUserToSubscribeList);
        } else {
          const userIndex = ownerId.subscriberList.findIndex(u => u.userId === this.currentUser);
          ownerId.subscriberList[userIndex].subStatus = this.subStatus.subscribe;
        }
        this.dataService.update(`users/${ownerId.id}`, { ...ownerId });
      }
    });
  }



  unsubscribe(shopOwnerId: string): void {
    this.alertService.create({
      confirmHandler: () => {
        this.loadingService.create().then(async (loading: HTMLIonLoadingElement) => {
          this.users.pipe(take(1)).subscribe((users: IUser[]) => {
            const user = users.find(u => u.id === shopOwnerId);
            if (user && user.subscriberList) {
              const userIndex = user.subscriberList.findIndex(u => u.userId === this.currentUser);
              if (userIndex !== -1 && user.subscriberList[userIndex].subStatus === this.subStatus.subscribe) {
                user.subscriberList[userIndex].subStatus = this.subStatus.unSubscribe;
                this.dataService.update(`users/${user.id}`, { ...user });
                loading.dismiss();
              }
            }
          });

        });
      }
    });


  }


  isUserInList(user: IUser): boolean {
    return user.subscriberList?.some(u => u.userId === this.currentUser);
  }

}
