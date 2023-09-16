import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AlertController, ModalController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';
// import { Subject } from 'rxjs';
// import { Category, Company, CompanyDto, Offer, OfferViewModel } from 'src/app/shared/models/company';
// import { AdminService } from 'src/app/shared/services/admin.service';
// import { LanguageService } from 'src/app/shared/services/language.service';
// import { UtilityService } from 'src/app/shared/services/utility.service';
// import { Plugins } from '@capacitor/core';
// import { takeUntil } from 'rxjs/operators';
// const { Storage } = Plugins;


@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {


//   searchText: string;
//   isSearchToolbarVisible = false;
//   @ViewChild('filterInput') filterInput: any;
//   userId: string;
//   isDataLoading = true;
//   companies: Company[] = [];
//   companiesSearch: Company[] = [];
//   categories: Category[] = [];
//   role: string;
//   destroyed = new Subject();
//   isSearchToolbar = false;
//   defaultImage = 'assets/images/avatar.png';
//   currentLanguage: string;
//   offers: Offer[] = [];



//   constructor(
//     public modalController: ModalController,
//     private adminService: AdminService,
//     private router: Router,
//     private translateService: TranslateService,
//     private utilityService: UtilityService,
//     private alertController: AlertController,
//     private languageService: LanguageService

//     ){
//       this.getCurrentUser();
//    }

  ngOnInit(): void {
//     this.ionViewWillEnter();
  }

  ngOnDestroy(): void {
//     this.destroyed.next();
//     this.destroyed.complete();
  }

//   ionViewWillEnter(): void {
//     this.getRoleOnReload();
//     this.subScribeRoleChanged();
//     this.subscribeLanguageChanged();
//     this.utilityService.showLoading().then((loading: any) => {
//       this.getCurrentUser();
//       this.getOffersDependOnRole();
//       this.getAllCompanies();
//       loading.dismiss();
//     });
//   }

//   refreshPage(event: any): void {
//     this.isDataLoading = true;
//     this.offers = [];
//     this.getOffersDependOnRole(event);
//   }

  
//   showCompanyDetails(id: string): void {
//     this.router.navigate([`/Dashboard/Details/${id}`]);
//   }


//   private getOffersDependOnRole(event?: any): void {
//     if (this.role === 'subAdmin') {
//       console.log('sds', this.role);
//       this.getSubAdminOffers(event);
//     } else {
//       this.getAllOffers(event);
//     }
//   }

  
//   edit(offer: Offer): void {
//     this.router.navigate([`/Dashboard/AddUpdateOffer/${offer.id}`])
//   }

//   async remove(offer: Offer): Promise<void> {
//     const alert = await this.alertController.create({
//       mode: 'ios',
//       backdropDismiss: false,
//       header: this.translateService.instant('confirmDelete'),
//       message: this.translateService.instant('areYouSureYouWantToDelete'),
//       buttons: [
//         {
//           text: this.translateService.instant('ok'),
//           handler: () => {
//             this.removeOffer(offer.id);
//           }
//         },
//         {
//           text: this.translateService.instant('cancel'),
//           role: 'cancel',
//           handler: () => {}
//         }
//       ]
//     });
//     await alert.present();
// }


//   private removeOffer(id: string): void {
//     this.utilityService.showLoading().then((loading: any) => {
//       this.adminService.removeOffer(id).then(() => {
//         this.utilityService.showServerMessage('removedSuccessfully', 'success');
//         loading.dismiss();
//       }).catch((err) => {
//         loading.dismiss();
//         this.utilityService.showServerMessage(err.message, 'danger');
//       });
//     });
//   }

//   async getCurrentUser() {
//     const usrId  = await Storage.get({ key: 'userId' });
//     if (usrId.value) {
//         this.userId = usrId.value;
//     }
//   }


//   navigateToAddOfferPage(): void {
//     this.router.navigate(['/Dashboard/AddUpdateOffer/0']);
//   }

//   getCompanyImage(companyId: string): string {
//     const foundCompany = this.companies.find(item => item.id === companyId);
//     if (foundCompany) {
//         return foundCompany.image;
//     } else {
//       return '';
//     }
//   }

//   getCompanyName(companyId: string): string {
//     const foundCompany = this.companies.find(item => item.id === companyId);
//     if (foundCompany) {
//       if (this.currentLanguage === 'en') {
//         return foundCompany.englishCompanyName;
//       } else {
//         return foundCompany.arabicCompanyName;
//       }
//     } else {
//       return '';
//     }
//   }

//   private getSubAdminOffers(event?: any) {
//     this.adminService.getAllOffers().subscribe((res: OfferViewModel[]) => {
//       this.offers = [];
//       const subAdminOffers = res.filter(item => item.data.userId === this.userId);
//       console.log('subAdminOffers', subAdminOffers);
//       if (subAdminOffers.length > 0) {
//         subAdminOffers.map(item => {
//           const offer: Offer = {
//             id: item.id,
//             arabicOfferText: item.data.arabicOfferText,
//             englishOfferText: item.data.englishOfferText,
//             companyId: item.data.companyId,
//             userId: item.data.userId
//           };
//           this.offers.push(offer);
//           console.log('off', this.offers);
//         });
//       }

//       this.isDataLoading = false;
//       if (event) {
//         event.target.complete();
//       }
//     });
//   }

//   private getAllOffers(event?: any) {
//     this.adminService.getAllOffers().subscribe((res: OfferViewModel[]) => {
//       this.offers = [];
//       if (res.length > 0) {
//         res.map(item => {
//           const offer: Offer = {
//             id: item.id,
//             arabicOfferText: item.data.arabicOfferText,
//             englishOfferText: item.data.englishOfferText,
//             companyId: item.data.companyId,
//             userId: item.data.userId
//           };
//           this.offers.push(offer);
//         });
//         this.isDataLoading = false;
//         if (event) {
//           event.target.complete();
//         }
//       }
//     });
//   }


//   private subscribeLanguageChanged(): void {
//     this.languageService.appLanguage.pipe(takeUntil(this.destroyed)).subscribe(res => {
//       this.currentLanguage = res;
//     });
//   }

//   private getAllCompanies(): void {
//     this.adminService.getSubAdminCompanies().subscribe((res: CompanyDto[]) => {
//       this.companies = [];
//       if (res.length > 0) {
//         res.map(item => {
//           const companyObj: Company = {
//             descriptionArabic: item.data.descriptionArabic,
//             descriptionEnglish: item.data.descriptionEnglish,
//             email: item.data.email,
//             arabicCompanyName: item.data.arabicCompanyName,
//             englishCompanyName: item.data.englishCompanyName,
//             image: item.data.image,
//             subAdminId: item.data.subAdminId,
//             id: item.id,
//             mobile: item.data.mobile,
//             latitude: item.data.latitude,
//             longitude: item.data.longitude,
//             website: item.data.website,
//             category: item.data.category,
//             rateNumber: item.data.rateNumber,
//             addressArabic: item.data.addressArabic, 
//             addressEnglish: item.data.addressEnglish, 
//             endTime: item.data.endTime, 
//             menuImage: item.data.menuImage,
//             reviews: item.data.reviews,
//             startTime: item.data.startTime,
//             workDaysArabic: item.data.workDaysArabic, 
//             workDaysEnglish: item.data.workDaysEnglish,
//             status: item.data.status
//           };
//           this.companies.push(companyObj);
//         });
//       }
//     });
//   }


//   private subScribeRoleChanged(): void {
//     this.utilityService.role.pipe(takeUntil(this.destroyed)).subscribe(res => {
//       this.role = res;
//     });
//   }

//   private async getRoleOnReload(): Promise<void> {
//     const currenUserRole  = await Storage.get({ key: 'role' });
//     if (currenUserRole.value) {
//         this.role = currenUserRole.value;
//     }
//   }

}
