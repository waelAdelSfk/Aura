import { Component, OnInit } from '@angular/core';
import { ICategory, IOffers } from '@app/models';
import { DataService, FireStoreService, ModalService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';
import { ManageOffersComponent } from './manage-offers/manage-offers.component';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class OfferComponent implements OnInit {


  offer: IOffers;
  offers: Observable<IOffers[]>;
  categories: ICategory[] = [];
  categoryId: string;
  ownerId: string;
  constructor(
    private modalService: ModalService,
    private fireStoreService: FireStoreService,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.firebaseService.getAll(Constants.FirebaseCollection.yearsGrowth).subscribe((months: IManage[]) => {
    //   this.yearName = months;
    // });

    this.fireStoreService.getAll('categories').subscribe((res: ICategory[]) => {
      this.categories = res;
    })
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    this.ownerId = this.activatedRoute.snapshot.paramMap.get('id');

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
    this.offers = this.fireStoreService.getAll('offersList').pipe(
      map((data: IOffers[]) => {
        const paramValue = this.activatedRoute.snapshot.paramMap.get('id');
        const categoryOffers = data.filter(offer => offer.categoryId === paramValue);
        const ownerOffers = data.filter(offer => offer.shopOwnerId === paramValue);
        return [...categoryOffers, ...ownerOffers];
      })
    );
  }

  // private getAllOffers(): void {
  //   if (this.categoryId) {
  //     this.offers = this.fireStoreService.getAll('offersList').pipe(map((data: IOffers[]) => data.
  //       filter((offer) => offer.categoryId === this.categoryId)));
  //   } else if (this.ownerId) {
  //     this.offers = this.fireStoreService.getAll('offersList').pipe(map((data: IOffers[]) => data.
  //       filter((offer) => offer.shopOwnerId === this.ownerId)));
  //   } else {
  //     this.offers = this.fireStoreService.getAll('offersList');
  //   }
  // }

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

  // private getAllStages(): void {
  //   this.stages = this.firebaseService.getAll(Constants.FirebaseCollection.growth)
  //     .pipe(map((data: IGrowthStage[]) => data.filter((s) => s.yearId === this.yearId).sort((a, b) =>
  //       a.number - b.number)));
  //   this.isDataLoadingNow = false;
  // }

}
