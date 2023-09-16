import { Component, OnDestroy, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AdminService } from '../shared/services/admin.service';
// import { takeUntil } from 'rxjs/operators';
// import { Subject } from 'rxjs';
// import { LanguageService } from '../shared/services/language.service';
// import { UtilityService } from '../shared/services/utility.service';
// import { Company, CompanyDto, PlaceStatus } from '../shared/models/company';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.page.html',
  styleUrls: ['./search-list.page.scss'],
})
export class SearchListPage implements OnInit, OnDestroy {

  // companies: Company[] = [];
  // destroyed = new Subject();
  // isDataLoading = false;
  // currentLanguage: string;
  // searchText: string;
  // defaultAvatar = 'assets/images/avatar.png';
  // isTrending = false;
  // isCommingSoon = false;
  // isSearchText = false;


  // constructor(
  //   private router: Router,
  //   private adminService: AdminService,
  //   private languageService: LanguageService,
  //   private utilityService: UtilityService,
  //   private activatedRoute: ActivatedRoute) {
  //  }

  ngOnInit(): void {
  //   this.ionViewWillEnter();
  }

  ngOnDestroy(): void {
  //   this.ionViewWillLeave();
  }

  // ionViewWillLeave(): void {
  //   console.log('leave');
  //   this.isCommingSoon = false;
  //   this.isSearchText = false;
  //   this.isTrending = false;
  // }


  // ionViewWillEnter(): void {
  //   this.utilityService.showLoading().then((loading: any) => {
  //     this.subscribeLanguageChanged();
  //     this.activatedRoute.queryParamMap.subscribe(res => {
  //       if (res.has('trending')) {
  //         this.isTrending = true;
  //         this.getAllCompanies();
  //       }
        
  //       if (res.has('commingSoon')) {
  //         this.isCommingSoon = true;
  //         this.getAllCompanies();
  //       }
  //       if (res.has('searchText') && (res.get('searchText') != null && res.get('searchText') != '')) {
  //         console.log('sds', res.get('searchText') != null && res.get('searchText') != '');
  //         this.isSearchText = true;
  //         this.searchText = res.get('searchText');
  //         this.getAllCompanies();
  //       }
  //     });
  //     loading.dismiss();
  //   });

  // }

  // refreshPage(event: any): void {
  //   this.isDataLoading = false;
  //   this.companies = [];
  //   this.getAllCompanies(event);
  // }

  // navigateToDetailsPage(id: string): void {
  //   this.router.navigate([`/Dashboard/Details/${id}`]);
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
  //       if (this.isTrending && companyObj.rateNumber > 2) {
  //         this.companies.push(companyObj);
  //       }

  //       if (this.isCommingSoon && companyObj.status == PlaceStatus.CommingSoon) {
  //         this.companies.push(companyObj);
  //       }

  //       if (this.searchText && (companyObj.arabicCompanyName.toLocaleLowerCase().indexOf(this.searchText) !== -1 || 
  //       companyObj.englishCompanyName.toLocaleLowerCase().indexOf(this.searchText.toLocaleLowerCase()) !== -1)) {
  //         this.companies.push(companyObj);
  //       }

  //     });
  //     this.isDataLoading = true;
  //     if (event) {
  //       event.target.complete();
  //     }
  //   });
  // }

  // private subscribeLanguageChanged(): void {
  //   this.languageService.appLanguage.pipe(takeUntil(this.destroyed)).subscribe(res => {
  //     this.currentLanguage = res;
  //   });
  // }

}
