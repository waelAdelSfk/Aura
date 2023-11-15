import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICategory, IOffers, IUser } from '@app/models';
import { FireStoreService } from '@app/services';
import { CommonUtility } from '@app/utilities';
import { SharedModule } from 'app/shared/shared.module';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent extends CommonUtility implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  categories: Array<ICategory> = [];
  offers: Array<IOffers> = []
  users: IUser[] = [];


  constructor(
    private fireStoreService: FireStoreService,
    private router: Router
  ) { super(); }


  ngOnInit(): void {
    this.fireStoreService.getAll('users').subscribe((res: IUser[]) => {
      this.users = res;
    })
    this.getCategories();
    this.getAllOffers();
  }

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }


  initializeSwiper() {
    this.swiper = this.swiperRef?.nativeElement.swiper,
    {
      autoplay: {
        delay: 1000,
      },
    };
    window.addEventListener('resize', this.updateSwiper);
  }

  updateSwiper = () => {
    if (this.swiper) {
      this.swiper.update();
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.updateSwiper);
  }


  // navigateToListPage(category: ICategory): void {
  //   this.router.navigate([`/app/offer/${category.id}`]);
  // }


  navigateToDetailsPage(offer: IOffers): void {
    console.log('offer Id', offer.id)
    this.router.navigate([`/app/details/${offer.id}`]);
  }

  private getCategories(): void {
    this.fireStoreService.getAll<ICategory>('categories').subscribe((res: Array<ICategory>) => {
      this.categories = res;
    });
  }

  private getAllOffers(): void {
    this.fireStoreService.getAll<IOffers>('offersList').subscribe((res: Array<IOffers>) => {
      this.offers = res;
    })
  }

  getName(id: string): string {
    if (this.users?.length > 0) {
      if (id && id != '' && id != null) {
        const userName = this.users.find(m => m.id == id);
        return userName ? userName.name : 'x';
      }
      return 'xx';
    }
    return 'xxx';
  }

}
