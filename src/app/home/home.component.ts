import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ICategory, IOffers } from '@app/models';
import { FireStoreService } from '@app/services';
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
export class HomeComponent implements OnInit, OnDestroy {

  currentLanguage: string;
  categories: Array<ICategory> = [];
  offers: Array<IOffers> = []

  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  // const swipers = new Swiper('.swiper', {
  //   speed: 400,
  //   spaceBetween: 100,
  // });

  constructor(
    private fireStoreService: FireStoreService,
    private router: Router
  ) { }


  swiperSlideChange(e: any) {
    console.log('changed')

  }
  ngOnInit(): void {
    this.getCurrentLanguage();
    this.getCategories();
    this.getAllOffers();
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 2, // Display two slides at a time
      spaceBetween: 20, // Adjust the space between slides
      // Add other configuration options as needed
      // For example, pagination, navigation, etc.
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    });
  }

  initializeSwiper() {
    // this.swiper = this.swiperRef?.nativeElement.swiper,

    // {
    //   autoplay: {
    //     delay: 1000,
    //   },
    //   // speed: 400,
    //   //   spaceBetween: 100,
    //   //   loop: true,
    //   //   loopedSlides: 3,
    // };

    // window.addEventListener('resize', this.updateSwiper);
  }

  updateSwiper = () => {
    if (this.swiper) {
      this.swiper.update();
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.updateSwiper);
  }


  onFocus(): void {
    this.router.navigate(['/dashboard/Search']);
  }

  navigateToListPage(category: ICategory): void {
    this.router.navigate([`/app/offer/${category.id}`]);
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

  private getCurrentLanguage(): void {
    this.currentLanguage = localStorage.getItem('lang') || 'ar';
  }
}
