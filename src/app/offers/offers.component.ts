import { Component, OnInit } from '@angular/core';
import { ICategory, IOffers } from '@app/models';
import { DataService, FireStoreService, ModalService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';
import { ManageOffersComponent } from './manage-offers/manage-offers.component';
import { Observable, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonUtility } from '@app/utilities';

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

  viewDetails(offer: IOffers): void {
    this.router.navigateByUrl(`app/details/${offer.id}`);
  }


}
