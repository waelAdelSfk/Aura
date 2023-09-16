import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { NavParams, PopoverController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';

// import { Company, CompanyDto, UserRate, UserRateDto } from '../../models/company';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent implements OnInit {

  // selectedStarIndex: number = 0;
  // user: any = {} as any;
  // companies: Company[] = [];
  // rates: UserRate[] = [];
  // company: Company = {} as Company; 


  // constructor(
  //   // private adminService: AdminService,
  //   // private utilityService: UtilityService,
  //   private translateService: TranslateService,
  //   private router: Router,
  //   private popoverController: PopoverController,
  //   // private baseService: BaseService,
  //   // private dataMappingService: DataMappingService,
  //   private navParams: NavParams) { }

  ngOnInit(): void {
    // this.ionViewWillEnter();
  }
  
  // ionViewWillEnter(): void {
  //   this.getCurrentUser();
  //   this.getAllCompanies();
  //   this.getAllRates();
  //   this.company = this.navParams.get('company')
  // }

  // close(): void {
  //   this.popoverController.dismiss();
  // }

  // rate(star: number): void {
  //   this.selectedStarIndex = star;
  // }

  // save(): void {
  //   // if (this.selectedStarIndex > 0) {
  //   //   this.utilityService.showLoading().then((loading: any) => {
  //   //     const userRate: UserRate = {
  //   //       rate: this.selectedStarIndex,
  //   //       name: this.user.name,
  //   //       userId: this.user.userId,
  //   //       date: new Date(),
  //   //       companyId: this.company.id ?? '',
  //   //       userImage: this.user.image ? this.user.image : ''
  //   //     };
  //   //     this.adminService.addRate(userRate).then(() => {
  //   //       this.utilityService.showServerMessage(this.translateService.instant('addedSuccessfully'), 'success');
  //   //       const rate = this.getCompanyRates(this.company);
  //   //       const comp = Object.assign({}, this.company);
  //   //       comp.rateNumber = rate;
  //   //       this.adminService.updateCompany(this.company.id, comp).then(() => {
  //   //         loading.dismiss();
  //   //         this.popoverController.dismiss();
  //   //       });
  //   //     }).catch((err) => {
  //   //       this.utilityService.showServerMessage(err.message, 'danger');
  //   //     });
  //   //   });
  //   // } else {
  //   //   this.popoverController.dismiss();
  //   //   this.utilityService.showServerMessage('pleaseSelectStars', 'warning');
  //   // }
  // }

  // private async getCurrentUser() {
  //   // const usrId  = await Storage.get({ key: 'userId' });
  //   // if (usrId.value) {
  //   //   this.baseService.getUserById('users', usrId.value).subscribe(res => {
  //   //     this.user = res;
  //   //   });
  //   // }
  // }

  // private getAllCompanies(): void {
  //   // this.adminService.getSubAdminCompanies().subscribe((res: CompanyDto[]) => {
  //   //   this.companies = [];
  //   //   res.map(item => {
  //   //     const companyObj: Company = {
  //   //       descriptionArabic: item.data.descriptionArabic,
  //   //       descriptionEnglish: item.data.descriptionEnglish,
  //   //       email: item.data.email,
  //   //       arabicCompanyName: item.data.arabicCompanyName,
  //   //       englishCompanyName: item.data.englishCompanyName,
  //   //       image: item.data.image,
  //   //       subAdminId: item.data.subAdminId,
  //   //       id: item.id,
  //   //       mobile: item.data.mobile,
  //   //       latitude: item.data.latitude,
  //   //       longitude: item.data.longitude,
  //   //       website: item.data.website,
  //   //       category: item.data.category,
  //   //       rateNumber: item.data.rateNumber,
  //   //       addressArabic: item.data.addressArabic, 
  //   //       addressEnglish: item.data.addressEnglish, 
  //   //       endTime: item.data.endTime, 
  //   //       menuImage: item.data.menuImage,
  //   //       reviews: item.data.reviews,
  //   //       startTime: item.data.startTime,
  //   //       workDaysArabic: item.data.workDaysArabic, 
  //   //       workDaysEnglish: item.data.workDaysEnglish,
  //   //       status: item.data.status
  //   //     };
  //   //     this.companies.push(companyObj);
  //   //   });

  //   // });
  // }

  // private getCompanyRates(company: Company): number {
  //   const companyRates = this.rates.filter(item => item.companyId === company.id);
  //   if(companyRates.length > 0) {
  //     let newNumberArray: number[] = [];
  //     newNumberArray = companyRates.map(item => item.rate);
  //     const startNumber = newNumberArray.reduce((a,b) => a + b);
  //     const companyRatePercenatge = startNumber / newNumberArray.length;
  //     return Math.round(companyRatePercenatge);
  //   } else {
  //     return 0;
  //   }
  // }

  // private getAllRates(): void {
  //   // this.adminService.getAllRates().subscribe((res: UserRateDto[]) => {
  //   //   if (res.length > 0) {
  //   //     this.rates = [];
  //   //     this.rates = this.dataMappingService.mapAllRates(res);
  //   //   }
  //   // });
  // }

}
