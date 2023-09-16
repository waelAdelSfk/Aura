import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { IonSegment, ModalController, PopoverController } from '@ionic/angular';
// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { DetailsPopoverComponent } from '../shared/component/details-popover/details-popover.component';
// import { Company, ExtraImagesViewModel, ExtraViewModel, UserRate, UserRateDto, UserReview, UserReviewDto } from '../shared/models/company';
// import { AdminService } from '../shared/services/admin.service';
// import { LanguageService } from '../shared/services/language.service';
// import { UserService } from '../shared/services/user.service';
// import { Location } from '@angular/common';
// import { DataMappingService } from '../shared/services/data-mapping.service';
// import { User, UserDto } from '../shared/models/user';
// import { Plugins } from '@capacitor/core';
// import { UtilityService } from '../shared/services/utility.service';
// import { AuthService } from '../shared/services/auth.service';
// import { RateComponent } from '../shared/component/rate/rate.component';
// import { ListMenuComponent } from '../shared/component/list-menu/list-menu.component';
// const { Browser } = Plugins;
// const { Storage } = Plugins;


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  
  // role: string;
  // private companyId: string;
  // selectedTab = 'highLight';
  // perviousUrl: string;
  // currentLanguage: string;
  // destroyed = new Subject();
  // users: User[] = [];
  // company: Company;
  // photos: ExtraImagesViewModel[] = [];
  // defalutImage = 'assets/images/avatar.png';
  // data = {
  //   name: 'Waleed',
  //   id: 'adsaas',
  //   image: 'assets/images/test2.png'
  // }
  // tabs: any[] = [
  //   {
  //     name: 'highLight',
  //     id: '1'
  //   },
  //   {
  //     name: 'info',
  //     id: '2'
  //   },
  //   {
  //     name: 'photos',
  //     id: '3'
  //   },   
  //    {
  //     name: 'reviews',
  //     id: '4'
  //   },
  // ];

  // usersReview: UserReview[] = [];
  // lastThreeUsersReview: UserReview[] = [];
  // rates: UserRate[] = [];
  // likePrecentage: number;
  // disLikePrecentage: number;
  // okayPrecentage: number;
  // isSearchToolbar = false;
  // searchText: string;
  // defaultAvatar = 'assets/images/avatar.png';
  // user: User;
  // @ViewChild('segment', {static: true}) segment: IonSegment;

  // constructor(
  //   public popoverController: PopoverController,
  //   private router: Router,
  //   private activatedRoute: ActivatedRoute,
  //   private adminService: AdminService,
  //   private languageService: LanguageService,
  //   private userService: UserService,
  //   private location: Location,
  //   private dataMappingService: DataMappingService,
  //   private utilityService: UtilityService,
  //   private authService: AuthService ) {
  //   // this.perviousUrl = this.router.url
  //   // console.log('pervious router', this.router.url);
  //  }

  ngOnInit(): void {
  //   this.ionViewWillEnter();
  }
  
  // ionViewWillEnter(): void {
  //   this.getCurrentUser();
  //   this.companyId = this.activatedRoute.snapshot.paramMap.get('id');
  //   this.segment.value = 'highLight';
  //   this.subScribeRoleChanged();
  //   this.subscribeLanguageChanged();
  //   this.getCompany();
  //   this.getAllUserReviews();
  //   this.getAllRates();
  //   this.getAllUsers();
  //   this.getAllExtaImages();
  // }
  // filterCompaines(searchText: string): void {
  //   // if (searchText !== '') {
  //   //   this.companies = this.companiesSearch.filter(com =>
  //   //     com.name.toLocaleLowerCase().indexOf(searchText) !== -1
  //   //   );
  //   // } else {
  //   //   this.ionViewWillEnter();
  //   // }
  // }

  // showSearchToolbar(): void {
  //   this.isSearchToolbar = !this.isSearchToolbar;
  // }

  // backToPreviousPage(): void {
  //   this.location.back();
  // }


  // cancelSearch(): void {
  //   // this.getCompaniesDependOnRole();
  // }

  // tabChanged(event: any): void {
  //   this.selectedTab = event.detail.value;
  // }

  // showMenuImage(comp: Company): void {
  //   if (comp.menuImage) {
  //     this.utilityService.showMenuImage(comp.menuImage);
  //   } else {
  //     this.utilityService.showWarningAlert();
  //   }
  // }

  // getUserNameOnRate(element: UserReview): string {
  //   const user = this.users.find(u => u.userId  === element.userId);
  //   if (user) {
  //     return user.name;
  //   }
  //   return '';
  // }

  // getUserImage(element: UserReview): string {
  //   const user = this.users.find(u => u.userId  === element.userId);
  //   if (user && user.image) {
  //     return user.image;
  //   } else {
  //     return this.defalutImage;
  //   }
  // }

  // navigateToAddImagePage(): void {
  //   this.router.navigate([`/Dashboard/AddUpdateCompanyImage/${this.companyId}`]);
  // }

  // async showOptions(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: DetailsPopoverComponent,
  //     cssClass: 'my-custom-class',
  //     event: ev,
  //     translucent: true,
  //     mode: 'ios',
  //     backdropDismiss: false,
  //     componentProps: {'company': this.company}
  //   });
  //   return await popover.present();
  // }

  // async openWebsiteLink(url: string): Promise<void> {
  //   console.log('url', url);
  //   await Browser.open({ url});
  // }

  // openMap(company: Company): void {
  //   // , {queryParams: { lat: company.latitude, long: company.longitude }})
  //   this.router.navigate(['/Dashboard/Map/'], {queryParams: { compId: company.id }});
  // }


  // addComment(): void {
  //   this.utilityService.addComment(this.user.userId, this.companyId);
  // }

  //  async rate(): Promise<void> {
  //   const popover = await this.popoverController.create({
  //     component: RateComponent,
  //     cssClass: 'bg-popover',
  //     translucent: true,
  //     mode: 'ios',
  //     backdropDismiss: false,
  //     componentProps: {'company': this.company}
  //   });
  //   return await popover.present();
  // }

  // async addToList(): Promise<void> {
  //     const popover = await this.popoverController.create({
  //       component: ListMenuComponent,
  //       translucent: true,
  //       backdropDismiss: false,
  //       mode: 'md'
  //     });
  //     return await popover.present();
  // }

  // private async getCurrentUser() {
  //   const usrId  = await Storage.get({ key: 'userId' });
  //   if (usrId.value) {
  //     this.authService.getById('users', usrId.value).subscribe(res => {
  //       this.user = res;
  //     });
  //   }
  // }

  // private subScribeRoleChanged(): void {
  //   this.utilityService.role.pipe(takeUntil(this.destroyed)).subscribe(res => {
  //     this.role = res;
  //   });
  // }

  // private getAllUsers(): void {
  //   this.adminService.getAllUsers().subscribe((res: UserDto[]) => {
  //     if (res.length > 0) {
  //       this.users = [];
  //       this.users = this.dataMappingService.mappingAllUsers(res);
  //     }
  //   });
  // }

  // private getCompany(): void {
  //   this.adminService.getCompanyById(this.companyId).subscribe((res: Company) => {
  //     this.company = res;
  //     console.log('company', this.company);
  //   });
  // }

  // private subscribeLanguageChanged(): void {
  //   this.languageService.appLanguage.pipe(takeUntil(this.destroyed)).subscribe(res => {
  //     this.currentLanguage = res;
  //   });
  // }

  // private getAllUserReviews(): void {
  //   this.userService.getAllReviews().subscribe((res: UserReviewDto[]) => {
  //     if (res.length > 0) {
  //       this.usersReview = [];
  //       this.lastThreeUsersReview = [];
  //       let allReviews = this.dataMappingService.mapAllReviews(res);
  //       const userReviewForCompany = allReviews.filter(rev => rev.companyId === this.companyId);
  //       this.usersReview = userReviewForCompany.sort((a, b) => b.date  > a.date ? 1 : -1);
  //       const max = this.usersReview.length >= 3 ? 3 : this.usersReview.length;
  //       this.lastThreeUsersReview = this.usersReview.slice(0, max);
  //     }
  //   });
  // }
  

  // private getAllRates(): void {
  //   this.userService.getAllRates().subscribe((res: UserRateDto[]) => {
  //     if (res.length > 0) {
  //       this.rates = [];
  //       let allRates = this.dataMappingService.mapAllRates(res);
  //       this.rates = allRates.filter(r => r.companyId === this.companyId);
  //       const allRatesLength = this.rates.length;
  //       const liked = this.rates.filter(l => l.rate > 3);
  //       const disLiked = this.rates.filter(l => l.rate <= 2);
  //       const okay = this.rates.filter(l => l.rate === 3);
  //       this.likePrecentage = allRatesLength ?  (liked.length * 100) / allRatesLength : 0;
  //       this.disLikePrecentage = allRatesLength ? (disLiked.length * 100) / allRatesLength : 0;
  //       this.okayPrecentage = allRatesLength ? (okay.length * 100) / allRatesLength : 0;
  //     }
  //   });
  // }

  // private getAllExtaImages(): void {
  //   this.adminService.getAllExtraImages().subscribe((res: ExtraViewModel[]) => {
  //     if (res.length > 0) {
  //       this.photos = [];
  //       const filteredPhotos: ExtraViewModel[] = res.filter(item => item.data.companyId === this.companyId);
  //       if (filteredPhotos.length > 0) {
  //         filteredPhotos.map((item, index) => {
  //           const extra: ExtraImagesViewModel = {
  //             image: item.data.image,
  //             id: item.id
  //           };
  //           this.photos.push(extra);
  //           console.log('ph', this.photos);
  //         });
  //       }
  //     }
  //   });
  // }


}
