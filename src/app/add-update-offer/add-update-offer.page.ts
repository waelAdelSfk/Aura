import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
// import { Plugins } from '@capacitor/core';
// import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
// import { Company, Offer, CompanyDto } from 'src/app/shared/models/company';
// import { LanguageService } from 'src/app/shared/services/language.service';
// import { UtilityService } from 'src/app/shared/services/utility.service';
// import { AdminService } from 'src/app/shared/services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// const { Storage } = Plugins;

@Component({
  selector: 'app-add-update-offer',
  templateUrl: './add-update-offer.page.html',
  styleUrls: ['./add-update-offer.page.scss'],
})
export class AddUpdateOfferPage implements OnInit {

  destroyed = new Subject();
  submitted = false;
  offer: any = {
    arabicOfferText: '',
    companyId: '',
    englishOfferText: '',
    userId: '',
    id: ''
  };
  customAlertOptions: any = {
    header: this.transalte.instant('pleaseSelectCompany'),
    translucent: true,
    mode: 'ios',
    interface: "popover"
  };
  currentLanguage!: string;
  companies: any[] = [];
  addUpdateOfferForm!: FormGroup;
  // private userId!: string;


  constructor(
    private transalte: TranslateService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    // private utilityService: UtilityService,
    // private adminService: AdminService,
    // private languageService: LanguageService,
    private formbuilder: FormBuilder

  ) {
    this.offer.id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    
  }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter(): void {
    this.initAddOfferForm();
    // this.utilityService.showLoading().then((loading: any) => {
    //   this.subscribeLanguageChanged();
    //   this.getCurrentUser();
    //   this.getAllCompanies();
    //   this.getOfferDetails();
    //   loading.dismiss();
    // });
  }

  save(): void {
    if (this.addUpdateOfferForm.valid) {
      // this.utilityService.showLoading().then((loading: any) => {
      //   this.submitted = true;
      //     const offerdata: Offer = Object.assign({}, this.addUpdateOfferForm.value);
      //     if (this.offer.id === '0') {
      //       this.addOffer(loading, offerdata);
      //     } else {
      //       this.updateOffer(loading, offerdata);
      //     }
      // });
    }
  }


  async getCurrentUser() {
    // const usrId  = await Storage.get({ key: 'userId' });
    // if (usrId.value) {
    //   this.userId = usrId.value;
    // }
  }

  private initAddOfferForm(): void {
    this.addUpdateOfferForm = this.formbuilder.group({
      arabicOfferText: ['',  Validators.required],
      englishOfferText: ['',  Validators.required],
      companyId:  ['', Validators.required]
    });
    console.log('form', this.addUpdateOfferForm.value);
  }

  // private 
  subscribeLanguageChanged(): void {
    // this.languageService.appLanguage.pipe(takeUntil(this.destroyed)).subscribe(res => {
    //   this.currentLanguage = res;
    // });
  }

  // private
   getAllCompanies(): void {
    // this.adminService.getSubAdminCompanies().subscribe((res: CompanyDto[]) => {
    //   this.companies = [];
    //   const subAdminCompanies = res.filter(item => item.data.subAdminId === this.userId);
    //   if (subAdminCompanies.length > 0) {
    //     subAdminCompanies.map(item => {
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
    //   }
    // });
  }

  // private 
  getOfferDetails(): void {
    if (this.offer.id != '0') {
      // this.adminService.getOfferById(this.offer.id).subscribe(res => {
      //   if (res) {
      //     this.addUpdateOfferForm.patchValue({
      //       companyId: res.companyId,
      //       englishOfferText: res.englishOfferText,
      //       arabicOfferText: res.arabicOfferText
      //     });
      //   }
      // });
    }

  }

  // private 
  updateOffer(loading: LoadingController, offer: any) {
    // offer.userId = this.userId;
    // this.adminService.updateOffer(this.offer.id ?? '', offer).then(() => {
    //   this.utilityService.showServerMessage(this.transalte.instant('updatedSuccessfully'), 'success');
    //   this.submitted = false;
    //   this.addUpdateOfferForm.reset();
    //   loading.dismiss();
    //   timer(2000).subscribe(() => {
    //     this.router.navigate(['/Dashboard/Offers']);
    //   });
    // }).catch((err) => {
    //   loading.dismiss();
    //   this.utilityService.showServerMessage(err.message, 'danger');
    // });
  }

  // private 
  addOffer(loading: LoadingController, offer: any) {
    // offer.userId = this.userId;
    // this.adminService.addOffer(offer).then(() => {
    //   this.utilityService.showServerMessage(this.transalte.instant('addedSuccessfully'), 'success');
    //   this.submitted = false;
    //   this.addUpdateOfferForm.reset();
    //   loading.dismiss();
    //   timer(2000).subscribe(() => {
    //     this.router.navigate(['/Dashboard/Offers']);
    //   });
    // }).catch((err) => {
    //   loading.dismiss();
    //   this.utilityService.showServerMessage(err.message, 'danger');
    // });
  }

}
