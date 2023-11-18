import { Component, OnInit } from '@angular/core';
import { ICategory, IOffers } from '@app/models';
import { DataService, FireStoreService, ModalService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';
import { ManageOffersComponent } from './manage-offers/manage-offers.component';
import { Observable, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonUtility } from '@app/utilities';
// import { DocumentReference } from '@angular/fire/firestore';

@Component({
  selector: 'app-offer',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class OffersComponent extends CommonUtility implements OnInit {

  offer: IOffers;
  offers: Observable<IOffers[]>;
  categories: ICategory[] = [];
  categoryId: string;
  constructor(
    private modalService: ModalService,
    private fireStoreService: FireStoreService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { super(); }

  ngOnInit(): void {
    this.fireStoreService.getAll('categories').subscribe((res: ICategory[]) => {
      this.categories = res;
    })
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getAllOffers();
  }

  remove(offer: IOffers): void {
    this.dataService.remove(`offersList/${offer.id}`);
  }


  async openAddEditModal(offer?: IOffers): Promise<void> {
    const modal = await this.modalService.create({
      component: ManageOffersComponent,
      componentProps: { item: offer },
    });
    await modal.present();
  }

  private getAllOffers(): void {
    if (this.isUser) {
      this.offers = this.fireStoreService.getAll('offersList').pipe(
        map((data: IOffers[]) => {
          const paramValue = this.activatedRoute.snapshot.paramMap.get('id');
          const categoryOffers = data.filter(offer => offer.categoryId === paramValue);
          const ownerOffers = data.filter(offer => offer.shopOwnerId === paramValue);
          return [...categoryOffers, ...ownerOffers];
        })
      );
    }
    if (this.isShopOwner) {
      if (this.categoryId) {
        this.offers = this.fireStoreService.getAll('offersList').pipe(map((data: IOffers[]) => data.
          filter((offer) => offer.categoryId === this.categoryId && offer.shopOwnerId === this.userId)));
      } else {
        this.offers = this.fireStoreService.getAll('offersList').pipe(map((data: IOffers[]) => data.
          filter((offer) => offer.shopOwnerId === this.userId)));
      }

    }
    else if (this.isAdmin) {
      if (this.categoryId) {
        this.offers = this.fireStoreService.getAll('offersList').pipe(map((data: IOffers[]) => data.
          filter((offer) => offer.categoryId === this.categoryId)));
      } else {
        this.offers = this.fireStoreService.getAll('offersList');
      }
    }

  }

  getName(id: string): string {
    if (this.categories?.length > 0) {
      if (id && id != '' && id != null) {
        const categoryName = this.categories.find(m => m.id == id);
        return categoryName ? categoryName.name : 'Offers';
      }
      return 'Offers';
    }
    return 'Offers';
  }

  // viewDetails(offer: IOffers): void {
  //   offer.viewCount += 1;
  //   this.router.navigateByUrl(`app/details/${offer.id}`);
  // }

  viewDetails(offer: IOffers): void {
    offer.viewCount += 1;
    this.updateViewCount(offer);
    this.router.navigateByUrl(`app/details/${offer.id}`);
  }

  private updateViewCount(offer: IOffers): void {
    // const offerRef = this.fireStoreService.getDocumentRef(`offersList/${offer.id}`);
    const data = { viewCount: offer.viewCount }
    this.dataService.update(`offersList/${offer.id}`, data);
    // offerRef.update({ viewCount: offer.viewCount })
    //   .then(() => {
    //     console.log('View count updated in Firestore.');
    //   })
    //   .catch((error) => {
    //     console.error('Error updating view count in Firestore:', error);
    //   });
  }

  // async viewDetails(offer: IOffers): Promise<void> {

  //   const dataValue = { shopOwnerId: offer.shopOwnerId, userId: this.userId, offerId: offer.id }
  //   // const Favorite: Partial<IFavorite> = {
  //   //   userId: this.currentUser,
  //   //   itemId: this.offerId
  //   // };


  //   if (offer) {
  //     this.dataService.update(`trendy/${offer.id}`, dataValue);
  //   } else {
  //     this.fireStoreService.addDoc('trendy', dataValue);
  //     // .subscribe((docRef: DocumentReference) => {
  //     //   // const offerId = docRef.id;
  //     //   // if (this.item.offerStatus === OfferStatus.approved) {
  //     //   // }
  //     //   // this.sendNotification(offerId);
  //     //   // this.close();
  //     // });
  //   }
  //   // Update the "trendy" collection with the clicked offer
  //   const trendyCollection = 'trendy';

  //   // Get the current trendy offers
  //   const trendyOffers = await this.fireStoreService.getAll(trendyCollection).pipe(take(1)).toPromise() as IOffers[];

  //   // Check if the offer is already in the trendy collection
  //   const isOfferInTrendy = trendyOffers.some(trendyOffer => trendyOffer.id === offer.id);

  //   if (!isOfferInTrendy) {
  //     // If not, add the offer to the trendy collection
  //     trendyOffers.push(offer);

  //     // Update the trendy collection in Firestore
  //     await this.fireStoreService.update(trendyCollection, trendyOffers);
  //   }

  //   // Navigate to the offer details page
  //   this.router.navigateByUrl(`app/details/${offer.id}`);
  // }


}
