import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AlertController, ModalController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';
// import { Subject } from 'rxjs';
// import { Category, CategoryViewModel, Company, CompanyDto } from 'src/app/shared/models/company';
// import { AdminService } from 'src/app/shared/services/admin.service';
// import { LanguageService } from 'src/app/shared/services/language.service';
// import { UtilityService } from 'src/app/shared/services/utility.service';
// import { Plugins } from '@capacitor/core';
// import { takeUntil } from 'rxjs/operators';
// const { Storage } = Plugins;
// const { Browser } = Plugins;
@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit, OnDestroy {

  // searchText: string;
  // isSearchToolbarVisible = false;
  // @ViewChild('filterInput') filterInput: any;
  // userId: string;
  // isDataLoading = false;
  // companies: Company[] = [];
  // companiesSearch: Company[] = [];
  // categories: Category[] = [];
  // role: string;
  // destroyed = new Subject();
  // isSearchToolbar = false;
  // defaultImage = 'assets/images/avatar.png';
  // currentLanguage: string;


  // constructor(
  //   public modalController: ModalController,
  //   private adminService: AdminService,
  //   private router: Router,
  //   private translateService: TranslateService,
  //   private utilityService: UtilityService,
  //   private alertController: AlertController,
  //   private languageService: LanguageService

  //   ){
  //     this.getCurrentUser();
  //  }

  ngOnInit(): void {
  //   this.ionViewWillEnter();
  }

  ngOnDestroy(): void {
  //   this.destroyed.next();
  //   this.destroyed.complete();
  }

  // ionViewWillEnter(): void {
  //   this.subScribeRoleChanged();
  //   this.subscribeLanguageChanged();
  //   this.getRoleOnReload();
  //   this.utilityService.showLoading().then((loading: any) => {
  //     this.getCurrentUser();
  //     this.getCategories();
  //     loading.dismiss();
  //   });
  // }

  // refreshPage(event: any): void {
  //   this.isDataLoading = false;
  //   this.companies = [];
  //   this.companiesSearch = [];
  //   this.getCompaniesDependOnRole(event);
  // }

  // categoryChanged(event: any): void {
  //   if (event.detail.value === 'all') {
  //     this.getCompaniesDependOnRole();
  //   } else {
  //     this.companies = this.companiesSearch.filter(com => com.category === event.detail.value);
  //   }
  // }

  // showSearchbar(): void {
  //   this.isSearchToolbarVisible = true;
  // }

  // hideSearchbar(): void {
  //   this.isSearchToolbarVisible = false;
  // }

  // addImagesForCompany(comp: Company): void {
  //   this.router.navigate([`/Dashboard/AddUpdateCompanyImage/${comp.id}`])
  // }


  // async openWebsiteLink(url: string): Promise<void> {
  //   await Browser.open({ url});
  // }


  // async getCurrentUser() {
  //   const usrId  = await Storage.get({ key: 'userId' });
  //   if (usrId.value) {
  //       this.userId = usrId.value;
  //       this.getCompaniesDependOnRole();
  //   }
  // }

  // async deleteCompany(comp: Company): Promise<void> {
  //   const alert = await this.alertController.create({
  //     mode: 'ios',
  //     header: this.translateService.instant('confirmDelete'),
  //     message: this.translateService.instant('areYouSureYouWantToDelete'),
  //     buttons: [
  //       {
  //         text: this.translateService.instant('okay'),
  //         handler: () => {
  //           this.utilityService.showLoading().then((loading: any) => {
  //             this.adminService.removeCompany(comp.id).then(() => {
  //               this.utilityService.showServerMessage(this.translateService.instant('removedSuccessfully'), 'success');
  //               this.getCompaniesDependOnRole();
  //               loading.dismiss();
  //               }).catch((err) => {
  //                 loading.dismiss();
  //                 this.utilityService.showServerMessage(err.message, 'danger');
  //               });
  //           });
  //         }
  //       },
  //       {
  //         text: this.translateService.instant('cancel'),
  //         role: 'cancel',
  //         handler: () => {}
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  // showCompanyDetails(comp: Company): void {
  //   const url = `/Dashboard/Details/${comp.id}`;
  //   this.router.navigate([url]);
  // }

  // updateCompany(comp: Company): void {
  //   this.router.navigate([`/Dashboard/addUpdateCompany/${comp.id}`]);
  // }

  // navigateToAddCompanyPage(): void {
  //   this.router.navigate(['/Dashboard/addUpdateCompany/0']);
  // }

  // filterCompaines(searchText: string): void {
  //   if (searchText !== '') {
  //     this.companies = this.currentLanguage === 'en' ?
  //     (this.companiesSearch.filter(com => com.englishCompanyName.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1)) :
  //     this.companiesSearch.filter(com => com.arabicCompanyName.indexOf(searchText) !== -1
  //     );
  //   } else {
  //     this.ionViewWillEnter();
  //   }
  // }

  // showSearchToolbar(): void {
  //   this.isSearchToolbar = !this.isSearchToolbar;
  //   if (this.isSearchToolbar) {
  //     this.filterInput.setFocus();
  //   }
  // }


  // cancelSearch(): void {
  //   this.getCompaniesDependOnRole();
  //   this.filterInput.setFocus();
  // }

  // private getSubAdminCompanies(id: string, event?: any) {
  //   console.log('here');
  //   this.adminService.getSubAdminCompanies().subscribe((res: CompanyDto[]) => {
  //     this.companies = [];
  //     this.companiesSearch = [];
  //     res.filter(item => item.data.subAdminId === id).map(item => {
  //       const companyObj: Company = {
  //         descriptionArabic: item.data.descriptionArabic,
  //         descriptionEnglish: item.data.descriptionEnglish,
  //         email: item.data.email,
  //         arabicCompanyName: item.data.arabicCompanyName,
  //         englishCompanyName: item.data.englishCompanyName,
  //         image: item.data.image,
  //         subAdminId: item.data.subAdminId,
  //         id: item.id,
  //         mobile: item.data.mobile,
  //         latitude: item.data.latitude,
  //         longitude: item.data.longitude,
  //         website: item.data.website,
  //         category: item.data.category,
  //         rateNumber: item.data.rateNumber,
  //         addressArabic: item.data.addressArabic, 
  //         addressEnglish: item.data.addressEnglish, 
  //         endTime: item.data.endTime, 
  //         menuImage: item.data.menuImage,
  //         reviews: item.data.reviews,
  //         startTime: item.data.startTime,
  //         workDaysArabic: item.data.workDaysArabic, 
  //         workDaysEnglish: item.data.workDaysEnglish,
  //         status: item.data.status
  //       };
  //       this.companies.push(companyObj);
  //       this.companiesSearch = this.companies;
  //     });
  //     this.isDataLoading = true;
  //     if (event) {
  //       event.target.complete();
  //     }
  //   });
  // }

  // private getAllCompanies(event?: any) {
  //   this.adminService.getSubAdminCompanies().subscribe((res: CompanyDto[]) => {
  //     this.companies = [];
  //     this.companiesSearch = [];
  //     res.map(item => {
  //       const companyObj: Company = {
  //         descriptionArabic: item.data.descriptionArabic,
  //         descriptionEnglish: item.data.descriptionEnglish,
  //         email: item.data.email,
  //         arabicCompanyName: item.data.arabicCompanyName,
  //         englishCompanyName: item.data.englishCompanyName,
  //         image: item.data.image,
  //         subAdminId: item.data.subAdminId,
  //         id: item.id,
  //         mobile: item.data.mobile,
  //         latitude: item.data.latitude,
  //         longitude: item.data.longitude,
  //         website: item.data.website,
  //         category: item.data.category,
  //         rateNumber: item.data.rateNumber,
  //         addressArabic: item.data.addressArabic, 
  //         addressEnglish: item.data.addressEnglish, 
  //         endTime: item.data.endTime, 
  //         menuImage: item.data.menuImage,
  //         reviews: item.data.reviews,
  //         startTime: item.data.startTime,
  //         workDaysArabic: item.data.workDaysArabic, 
  //         workDaysEnglish: item.data.workDaysEnglish,
  //         status: item.data.status
  //       };
        
  //       this.companies.push(companyObj);
  //       this.companiesSearch = this.companies;
  //     });
  //     console.log('com', this.companies);
  //     this.isDataLoading = true;
  //     if (event) {
  //       event.target.complete();
  //     }
  //   });
  // }

  // private subScribeRoleChanged(): void {
  //   this.utilityService.role.pipe(takeUntil(this.destroyed)).subscribe(res => {
  //     this.role = res;
  //   });
  // }

  // private async getRoleOnReload(): Promise<void> {
  //   const currenUserRole  = await Storage.get({ key: 'role' });
  //   if (currenUserRole.value) {
  //       this.role = currenUserRole.value;
  //   }
  // }

  // private getCompaniesDependOnRole(event?: any): void {
  //   if (this.role === 'subAdmin') {
  //     this.getSubAdminCompanies(this.userId, event);
  //   } else {
  //     this.getAllCompanies(event);
  //   }
  // }

  // private getCategories(): void {
  //   this.adminService.getAllCategory().subscribe((res: CategoryViewModel[]) => {
  //     this.categories = [];
  //     res.map(item => {
  //       const category: Category = {
  //         categoryArabicName: item.data.categoryArabicName,
  //         categoryEnglishName: item.data.categoryEnglishName,
  //         id: item.id,
  //         image: item.data.image
  //       };
  //       this.categories.push(category);
  //     });
  //   });
  // }

  // private subscribeLanguageChanged(): void {
  //   this.languageService.appLanguage.pipe(takeUntil(this.destroyed)).subscribe(res => {
  //     this.currentLanguage = res;
  //   });
  // }


}
