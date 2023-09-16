import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActionSheetController, LoadingController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';
// // import { Plugins, CameraResultType, CameraSource, CameraOptions } from '@capacitor/core';
// // import { AngularFireStorage } from '@angular/fire/storage';
// import { finalize, takeUntil } from 'rxjs/operators';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Observable, Subject, timer } from 'rxjs';
// import { AngularFirestoreCollection } from '@angular/fire/firestore';
// import { Category, Company, CategoryViewModel } from 'src/app/shared/models/company';
// import { User } from 'src/app/shared/models/user';
// import { AuthService } from 'src/app/shared/services/auth.service';
// import { LanguageService } from 'src/app/shared/services/language.service';
// import { UtilityService } from 'src/app/shared/services/utility.service';
// import { AdminService } from 'src/app/shared/services/admin.service';
// const { Storage } = Plugins;
// const { Camera } = Plugins;
// const { Geolocation } = Plugins;
// declare var google;

@Component({
  selector: 'app-add-update-company',
  templateUrl: './add-update-company.page.html',
  styleUrls: ['./add-update-company.page.scss'],
})
export class AddUpdateCompanyPage implements OnInit {

  // destroyed = new Subject();
  // myLatlng = { lat: 29, lng: 47 };
  // submitted = false;
  // isShowServerErrorMessage = false;
  // serverErrorMessage!: string;
  // addUpdateCompanyForm!: FormGroup;
  // user: any;
  // defaultImage = 'assets/images/avatar.png';

  // isAvatarCaptureImage = false;
  // avatarCapturedImage!: string;
  // isMenuImageCaptured = false;
  // menuCaptureImage!: string;
  // avatarSelectedPhoto: any;
  // menuSelectedPhoto: any;

  // categories: any[] = [];
  // customAlertOptions: any = {
  //   header: this.transalte.instant('pleaseSelectCategory'),
  //   translucent: true,
  //   mode: 'ios',
  // };
  // locations!: Observable<any>;
  // locationsCollection: any; // AngularFirestoreCollection<any>;
  // @ViewChild('map', {static: true}) mapElement!: ElementRef;
  // markers: any[] = [];
  // map: any; // google.maps.Map;
 
  // get descriptionArabic() {
  //   return this.addUpdateCompanyForm.get('descriptionArabic');
  // }

  // get descriptionEnglish() {
  //   return this.addUpdateCompanyForm.get('descriptionEnglish');
  // }
  // get mobile() {
  //   return this.addUpdateCompanyForm.get('mobile');
  // }
  // get arabicCompanyName() {
  //   return this.addUpdateCompanyForm.get('arabicCompanyName');
  // }
  // get englishCompanyName() {
  //   return this.addUpdateCompanyForm.get('englishCompanyName');
  // }

  // get email() {
  //   return this.addUpdateCompanyForm.get('email');
  // }
  // currentLanguage!: string;
  // company: any = {} as any;

  // constructor(
  //   private formbuilder: FormBuilder,
  //   private loadingController: LoadingController,
  //   private transalte: TranslateService,
  //   // private authService: AuthService,
  //   // private angularFireStorage: AngularFireStorage,
  //   private router: Router,
  //   private actionSheetController: ActionSheetController,
  //   private activatedRoute: ActivatedRoute,
  //   // private utilityService: UtilityService,
  //   // private adminService: AdminService,
  //   // private languageService: LanguageService

  // ) {
  //   this.company.id = this.activatedRoute.snapshot.paramMap.get('id');

  // }

  ngOnInit() {
    // this.ionViewWillEnter();
  }

  // ionViewWillEnter(): void {
  //   this.subscribeLanguageChanged();
  //   // this.utilityService.showLoading().then((loading: any) => {
  //     this.initMap();
  //     this.getCurrentUser();
  //     this.getCategories();
  //     this.initAddCompanyForm();
  //     // loading.dismiss();
  //   // });
  // }

  // async selectImageSource(isAvatarImage: boolean) {
  //   const buttons = [
  //     {
  //       text: this.transalte.instant('takePhoto'),
  //       icon: 'camera',
  //       handler: () => {
  //         // this.captureImage(CameraSource.Camera, isAvatarImage);
  //       }
  //     },
  //     {
  //       text: this.transalte.instant('chooseFromGallery'),
  //       icon: 'image',
  //       handler: () => {
  //         // this.captureImage(CameraSource.Photos, isAvatarImage);
  //       }
  //     }
  //   ];

  //   const actionSheet = await this.actionSheetController.create({
  //     header: this.transalte.instant('select'),
  //     buttons,
  //     mode: 'ios'
  //   });
  //   await actionSheet.present();
  // }

  // async captureImage(cameraSource: any, isAvatarImage: boolean) {
  //   // const options: CameraOptions = {
  //   //   quality: 60,
  //   //   allowEditing: false,
  //   //   resultType: CameraResultType.DataUrl,
  //   //   source: cameraSource,
  //   // };
  //   // Camera.getPhoto(options).then((imgData) => {
  //   //   if (isAvatarImage) {
  //   //     this.avatarCapturedImage = imgData.dataUrl;
  //   //     this.avatarSelectedPhoto = this.utilityService.dataURLtoBlob('data:img/jpeg;base64' + imgData.dataUrl);
  //   //     this.isAvatarCaptureImage = true;
  //   //   } else {
  //   //     this.menuCaptureImage = imgData.dataUrl;
  //   //     this.menuSelectedPhoto = this.utilityService.dataURLtoBlob('data:img/jpeg;base64' + imgData.dataUrl);
  //   //     this.isMenuImageCaptured = true;
  //   //   }
  //   // }, err => {
  //   //   console.log('err', err);
  //   // });
  // }

  // addUpdateCompany(): void {
  //   // if (this.addUpdateCompanyForm.valid) {
  //   //   this.utilityService.showLoading().then((loading: any) => {
  //   //     this.submitted = true;
  //   //     if (this.company.id === '0') {
  //   //       this.confirmAddingCompany(loading);
  //   //     } else {
  //   //       this.confirmUpdateCompany(loading);
  //   //     }
  //   //   });
  //   // } else {
  //   //   console.log('form', this.addUpdateCompanyForm.value);
  //   //   this.utilityService.showWrongDataAlert();
  //   // }
  // }

  // async getCurrentUser() {
  //   // const usrId  = await Storage.get({ key: 'userId' });
  //   // if (usrId.value) {
  //   //   this.authService.getById('users', usrId.value).subscribe(res => {
  //   //     this.user = res;
  //   //   });
  //   // }
  // }

  // async getCurrentPosition() {
  //   // const coordinates = await Geolocation.getCurrentPosition().then(pos => {
  //   //   if (pos.coords.latitude && pos.coords.longitude) {
  //   //     const myLocation = {lat: pos.coords.latitude, lng: pos.coords.longitude};
  //   //     this.deleteMarkers();
  //   //     this.addMarker(myLocation);
  //   //     this.addUpdateCompanyForm.patchValue({
  //   //       latitude: pos.coords.latitude,
  //   //       longitude: pos.coords.longitude
  //   //     });
  //   //   }
  //   // }).catch(err => {
  //   //   console.log('error', err);
  //   // });
  // }

  // private updateMap(latitude: number, longitude: number): void {
  //   // const latLang = new google.maps.LatLng(latitude, longitude);
  //   // const marker = new google.maps.Marker({
  //   //   position: latLang,
  //   //   animation: google.maps.Animation.DROP,
  //   //   map: this.map
  //   // });
  //   // this.map.setCenter(latLang);
  //   // this.map.setZoom(5);
  // }


  // private initAddCompanyForm() {
  //   this.addUpdateCompanyForm = this.formbuilder.group({
  //     arabicCompanyName: ['',  Validators.required],
  //     englishCompanyName: ['',  Validators.required],
  //     mobile:  [''],
  //     email:  ['', Validators.email],
  //     descriptionArabic:  ['', Validators.required],
  //     descriptionEnglish:  ['', Validators.required],
  //     category: ['', Validators.required],
  //     longitude: [this.myLatlng.lng],
  //     latitude: [this.myLatlng.lat],
  //     website:  [''],
  //     startTime: ['', Validators.required],
  //     endTime: ['', Validators.required],
  //     addressArabic: [''],
  //     addressEnglish: [''],
  //     workDaysArabic: [''],
  //     workDaysEnglish: [''],
  //     menuImage: [''],
  //     status: ['0', Validators.required]

  //   });
  //   if (this.company.id !== '0') {
  //     this.getCompanyDetails(this.company.id);
  //   }
  // }

  // private updateForm() {
  //   this.addUpdateCompanyForm = this.formbuilder.group({
  //    englishCompanyName: [this.company.englishCompanyName,  Validators.required],
  //    arabicCompanyName: [this.company.arabicCompanyName,  Validators.required],
  //    mobile:  [this.company.mobile],
  //    email:  [this.company.email, Validators.email],
  //    descriptionArabic:  [this.company.descriptionArabic, Validators.required],
  //    descriptionEnglish:  [this.company.descriptionEnglish, Validators.required],
  //    category: [this.company.category, Validators.required],
  //    longitude: [this.company.longitude],
  //    latitude: [this.company.latitude],
  //    website:  [this.company.website],
  //    startTime: [this.company.startTime],
  //    endTime: [this.company.endTime],
  //    addressArabic: [this.company.addressArabic],
  //    addressEnglish: [this.company.addressEnglish],
  //    workDaysArabic: [this.company.workDaysArabic],
  //    workDaysEnglish: [this.company.workDaysEnglish],
  //    menuImage: [this.company.menuImage],
  //    status: [this.company.status]
  //   });
  //   if (this.company.image) {
  //     this.isAvatarCaptureImage = true;
  //     this.avatarCapturedImage = this.company.image;
  //   } else {
  //     this.isAvatarCaptureImage = false;
  //   }

  //   if (this.company.menuImage) {
  //     this.menuCaptureImage = this.company.menuImage;
  //   } else {
  //     this.isMenuImageCaptured = false;
  //   }

  //   this.updateMap(this.company.latitude, this.company.longitude);
  // }

  // private confirmAddingCompany(loading: LoadingController): void {
  //   // const companyInfo: Company = Object.assign({}, this.addUpdateCompanyForm.value);
  //   // companyInfo.subAdminId = this.user.userId;
  //   // if (this.avatarSelectedPhoto) {
  //   //   this.isAvatarCaptureImage = true;
  //   //   const filePath =  `CompanyImages/${'image-'}${new Date().getTime()}`;
  //   //   const fileRef = this.angularFireStorage.ref(filePath);
  //   //   this.angularFireStorage.upload(filePath, this.avatarSelectedPhoto).snapshotChanges().pipe(
  //   //     finalize(() => {
  //   //       fileRef.getDownloadURL().subscribe((url) => {
  //   //         companyInfo.image = url;
  //   //         if (this.menuSelectedPhoto) {
  //   //           this.isMenuImageCaptured = true;
  //   //           const menuFilePath =  `MenuImages/${'image-'}${new Date().getTime()}`;
  //   //           const menuFileRef = this.angularFireStorage.ref(menuFilePath);
  //   //           this.angularFireStorage.upload(menuFilePath, this.avatarSelectedPhoto).snapshotChanges().pipe(
  //   //             finalize(() => {
  //   //               menuFileRef.getDownloadURL().subscribe((menuImageurl) => {
  //   //                 companyInfo.menuImage = menuImageurl;
  //   //                 this.callBackAddCompany(companyInfo, loading);
  //   //               });
  //   //             })
  //   //           ).subscribe();
  //   //         } else {
  //   //           this.callBackAddCompany(companyInfo, loading);
  //   //         }
  //   //       });
  //   //     })
  //   //   ).subscribe();
  //   // } else {
  //   //   this.callBackAddCompany(companyInfo, loading);
  //   // }
  // }


  // uploadMenuImage(): void {
  //   // if (this.menuSelectedPhoto) {
  //   //   this.utilityService.showLoading().then((loading: any) => {
  //   //     let companyInfo: Company = Object.assign({}, this.addUpdateCompanyForm.value);
  //   //     this.isMenuImageCaptured = true;
  //   //     const menuFilePath =  `MenuImages/${'image-'}${new Date().getTime()}`;
  //   //     const menuFileRef = this.angularFireStorage.ref(menuFilePath);
  //   //     this.angularFireStorage.upload(menuFilePath, this.menuSelectedPhoto).snapshotChanges().pipe(
  //   //       finalize(() => {
  //   //         menuFileRef.getDownloadURL().subscribe((menuImageurl) => {
  //   //           companyInfo.menuImage = menuImageurl;
  //   //           this.callBackUpdate(companyInfo, loading);
  //   //         });
  //   //       })
  //   //     ).subscribe();
  //   //   });
  //   // }
  // }

  // removeMenuImage(): void {
  //   // if (this.company.menuImage) {
  //   //   this.utilityService.showLoading().then((loading: any) => {
  //   //     let companyInfo: Company = Object.assign({}, this.addUpdateCompanyForm.value);
  //   //     companyInfo.menuImage = null;
  //   //     this.menuSelectedPhoto = '';
  //   //     this.isMenuImageCaptured = false;
  //   //     this.callBackUpdate(companyInfo, loading);
  //   //   });
  //   // } else {
  //   //   this.menuSelectedPhoto = '';
  //   //   this.isMenuImageCaptured = false;
  //   // }
  // }

  // private confirmUpdateCompany(loading: LoadingController): void {
  //   // let companyInfo: Company = Object.assign({}, this.addUpdateCompanyForm.value);
  //   // companyInfo.subAdminId = this.user.userId;      
  //   //   if (this.avatarSelectedPhoto) {
  //   //     this.isAvatarCaptureImage = true;
  //   //     const filePath = `CompanyImages/${'image-'}${new Date().getTime()}`;
  //   //     const fileRef = this.angularFireStorage.ref(filePath);
  //   //     this.angularFireStorage.upload(filePath, this.avatarSelectedPhoto).snapshotChanges().pipe(
  //   //       finalize(() => {
  //   //         fileRef.getDownloadURL().subscribe((url) => {
  //   //           companyInfo.image = url;
  //   //           this.callBackUpdate(companyInfo, loading);
  //   //         });
  //   //       })
  //   //     ).subscribe();
  //   // } else {
  //   //   this.callBackUpdate(companyInfo, loading);
  //   // }
  // }

  // private getCompanyDetails(companyId: string): void {
  //   // this.adminService.getCompanyById(companyId).subscribe(res => {
  //   //   this.company = res;
  //   //   this.updateForm();
  //   // });
  // }

  // private callBackUpdate(companyInfo: any, loading: LoadingController): void {
  //     // this.adminService.updateCompany( this.company.id, companyInfo).then(() => {
  //     //   this.utilityService.showServerMessage(this.transalte.instant('updatedSuccessfully'), 'success');
  //     //   this.submitted = false;
  //     //   loading.dismiss();
  //     //   timer(2000).subscribe(() => {
  //     //     this.router.navigate(['/Dashboard/Company']);
  //     //   });
  //     // }).catch((err) => {
  //     //   loading.dismiss();
  //     //   this.utilityService.showServerMessage(err.message, 'danger');
  //     // });
  // }

  // private callBackAddCompany(companyInfo: any, loading: LoadingController) {
  //   // companyInfo.rateNumber = 0;
  //   // this.adminService.addCompany(companyInfo).then(() => {
  //   //   this.loadingController.dismiss();
  //   //   this.utilityService.showServerMessage(this.transalte.instant('addedSuccessfully'), 'success');
  //   //   this.submitted = false;
  //   //   this.router.navigate(['/Dashboard/Company']);
  //   //   loading.dismiss();
  //   // }).catch((err) => {
  //   //   loading.dismiss();
  //   //   this.utilityService.showServerMessage(err.message, 'danger');
  //   // });
  // }

  // private getCategories() {
  //   // this.adminService.getAllCategory().subscribe((res: CategoryViewModel[]) => {
  //   //   this.categories = [];
  //   //   res.map(item => {
  //   //     const category: Category = {
  //   //       id: item.id,
  //   //       categoryArabicName: item.data.categoryArabicName,
  //   //       categoryEnglishName: item.data.categoryEnglishName,
  //   //       image: item.data.image
  //   //     };
  //   //     this.categories.push(category);
  //   //   });
  //   // });
  // }

  // private deleteMarkers() {
  //   this.setMapOnAll(null);
  //   this.markers = [];
  // }

  // private setMapOnAll(map: any /*google.maps.Map*/ | null) {
  //   for (let i = 0; i < this.markers.length; i++) {
  //     this.markers[i].setMap(map);
  //   }
  // }

  // private addMarker(location: any) {
  //   // const marker = new google.maps.Marker({
  //   //   position: location,
  //   //   map: this.map,
  //   // });
  //   // this.markers.push(marker);
  // }

  // private initMap(): void {
  //   // this.map = new google.maps.Map(
  //   //   document.getElementById('map') as HTMLElement,
  //   //   {
  //   //     zoom: 4,
  //   //     center: { lat: 29, lng: 47 },
  //   //   }
  //   // );

  //   // // Configure the click listener.
  //   // google.maps.event.addListener(this.map, 'click', (event) => {
  //   //   this.myLatlng = event.latLng.toJSON();
  //   //   this.deleteMarkers();
  //   //   this.addMarker(event.latLng);
  //   //   this.addUpdateCompanyForm.patchValue({
  //   //     latitude: this.myLatlng.lat,
  //   //     longitude: this.myLatlng.lng
  //   //   });
  //   // });

  //   // if (this.company.id === '0') {
  //   //   // Adds a marker at the center of the map.
  //   //   this.addMarker(this.myLatlng);
  //   // }

  // }

  // private subscribeLanguageChanged(): void {
  //   // this.languageService.appLanguage.pipe(takeUntil(this.destroyed)).subscribe(res => {
  //   //   this.currentLanguage = res;
  //   // });
  // }

}
