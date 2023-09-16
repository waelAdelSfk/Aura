import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Plugins } from '@capacitor/core';
// import { AlertController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';
// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { defaultImage } from '../shared/constants/constant';
// import { Company, CompanyDto, UserLike, UserSave, UserSavedDto } from '../shared/models/company';
// import { AdminService } from '../shared/services/admin.service';
// import { LanguageService } from '../shared/services/language.service';
// import { UtilityService } from '../shared/services/utility.service';
// const { Storage } = Plugins;

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {


  // userLikes: UserLike[] = [];
  // userSave: UserSave[] = [];
  // companies: Company[] = [];
  // destroyed = new Subject();
  // currentLanguage: string;
  // private userId: string;

  // constructor(
  //   private adminService: AdminService,
  //   private languageService: LanguageService,
  //   private utilityService: UtilityService,
  //   private alertController: AlertController,
  //   private translateService: TranslateService,
  //   private router: Router
  // ) { }


  ngOnInit(): void {
  //   this.ionViewWillEnter();
  }

  // ionViewWillEnter(): void {
  //   this.utilityService.showLoading().then((loading: any) => {
  //     this.subscribeLanguageChanged();
  //     this.getCurrentUser();
  //     this.getUserLikes();
  //     this.getUserSaved();
  //     this.getAllCompanies();
  //     loading.dismiss();
  //   });
  // }

  // private async getCurrentUser(): Promise<void> {
  //   const usrId  = await Storage.get({ key: 'userId' });
  //   if (usrId.value) {
  //       this.userId = usrId.value;
  //   }
  // }


  // getPlcaeName(item: UserSave): string {
  //   const foundCompany = this.companies.find(i => i.id === item.companyId);
  //   if (foundCompany) {
  //     if (this.currentLanguage === 'en') {
  //       return foundCompany.englishCompanyName;
  //     } else {
  //       return foundCompany.arabicCompanyName;
  //     }
  //   } else {
  //     return '';
  //   }
  // }

  // getCompanyImage(item: UserSave): string {
  //   const foundCompany = this.companies.find(i => i.id === item.companyId);
  //   if (foundCompany) {
  //     return foundCompany.image ? foundCompany.image : defaultImage;
  //   } else {
  //     return defaultImage;
  //   }
  // }

  // viewCompanyDetails(id: string): void {
  //   this.router.navigate([`/Dashboard/Details/${id}`]);
  // }

  // async removeSave(item: UserSave) {
  //   const alert = await this.alertController.create({
  //     mode: 'ios',
  //     header: this.translateService.instant('confirmDelete'),
  //     message: this.translateService.instant('areYouSureYouWantToDelete'),
  //     backdropDismiss: false,
  //     buttons: [
  //       {
  //         text: this.translateService.instant('ok'),
  //         handler: () => {
  //           this.utilityService.showLoading().then((loading: any) => {
  //             this.adminService.removeSave(item.id).then(() => {
  //               this.utilityService.showServerMessage(this.translateService.instant('removedSuccessfully'), 'success');
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


  // async removeLike(item: UserLike) {
  //   const alert = await this.alertController.create({
  //     mode: 'ios',
  //     header: this.translateService.instant('confirmDelete'),
  //     message: this.translateService.instant('areYouSureYouWantToDelete'),
  //     backdropDismiss: false,
  //     buttons: [
  //       {
  //         text: this.translateService.instant('ok'),
  //         handler: () => {
  //           this.utilityService.showLoading().then((loading: any) => {
  //             this.adminService.removeLike(item.id).then(() => {
  //               this.utilityService.showServerMessage(this.translateService.instant('removedSuccessfully'), 'success');
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


  // private getAllCompanies(event?: any): void {
  //   this.adminService.getSubAdminCompanies().subscribe((res: CompanyDto[]) => {
  //     this.companies = [];
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
  //     });
  //     if (event) {
  //       event.target.complete();
  //     }
  //   });
  // }


  // private getUserLikes() {
  //   this.adminService.getAllLikes().subscribe((res: UserSavedDto[]) => {
  //     const userLikes = res.filter(item => item.data.userId === this.userId);
  //     this.userLikes = [];
  //     if( userLikes.length > 0) {
  //       userLikes.forEach(item => {
  //         const like: UserLike = {
  //           companyId: item.data.companyId,
  //           id: item.id,
  //           userId: item.data.userId
  //         };
  //         this.userLikes.push(like);
  //       })
  //     }
  //   });
  // }

  // private getUserSaved() {
  //   this.adminService.getAllSaved().subscribe(res => {
  //     const userSave = res.filter(item => item.data.userId === this.userId);
  //     this.userSave = [];
  //     if( userSave.length > 0) {
  //       userSave.forEach(item => {
  //         const save: UserSave = {
  //           companyId: item.data.companyId,
  //           id: item.id,
  //           userId: item.data.userId
  //         };
  //         this.userSave.push(save);
  //       })
  //     }
  //   });
  // }

  // private subscribeLanguageChanged(): void {
  //   this.languageService.appLanguage.pipe(takeUntil(this.destroyed)).subscribe(res => {
  //     this.currentLanguage = res;
  //   });
  // }
}
