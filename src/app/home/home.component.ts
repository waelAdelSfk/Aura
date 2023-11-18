import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICategory, IOffers, IUser } from '@app/models';
import { DataService, FireStoreService } from '@app/services';
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
  trendyOffers: Array<IOffers> = []


  constructor(
    private fireStoreService: FireStoreService,
    private router: Router,
    private dataService: DataService,
  ) { super(); }


  ngOnInit(): void {
    this.fireStoreService.getAll('users').subscribe((res: IUser[]) => {
      this.users = res;
    });
    this.getCategories();
    this.getAllOffers();
    this.getAllTrendyOffers();
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

  // private getAllTrendyOffers(): void {
  //   this.fireStoreService.getAll<IOffers>('offersList').subscribe(
  //     (res: Array<IOffers>) => {
  //       this.trendyOffers = res.sort((a, b) => b.viewCount - a.viewCount)
  //     })
  // }

  private getAllTrendyOffers(): void {
    const minimumViewCount = 10;
    this.fireStoreService.getAll<IOffers>('offersList').subscribe(
      (res: Array<IOffers>) => {
        this.trendyOffers = res.filter(offer => offer.viewCount >= minimumViewCount);
        this.trendyOffers = this.trendyOffers.sort((a, b) => b.viewCount - a.viewCount);
      }
    );
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




  navigateToDetailsPage(offer: IOffers): void {
    console.log('offer Id', offer.id)
    offer.viewCount += 1;
    this.updateViewCount(offer);
    this.router.navigate([`/app/details/${offer.id}`]);
  }

  private updateViewCount(offer: IOffers): void {
    // const offerRef = this.fireStoreService.getDocumentRef(`offersList/${offer.id}`);
    const data = { viewCount: offer.viewCount }
    this.dataService.softUpdate(`offersList/${offer.id}`, data);
    // offerRef.update({ viewCount: offer.viewCount })
    //   .then(() => {
    //     console.log('View count updated in Firestore.');
    //   })
    //   .catch((error) => {
    //     console.error('Error updating view count in Firestore:', error);
    //   });
  }
}
