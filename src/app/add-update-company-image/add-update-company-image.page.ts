import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Location } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
// import { Company, ExtraImage, ExtraImagesViewModel, ExtraViewModel } from 'src/app/shared/models/company';
// import { AdminService } from 'src/app/shared/services/admin.service';
// import { finalize, takeUntil } from 'rxjs/operators';
// import { LanguageService } from 'src/app/shared/services/language.service';
// import { Subject } from 'rxjs';
// import { TranslateService } from '@ngx-translate/core';
// import { CameraOptions, CameraResultType, CameraSource, Plugins } from '@capacitor/core';
// import { UtilityService } from 'src/app/shared/services/utility.service';
// import { ActionSheetController } from '@ionic/angular';
// import { AngularFireStorage } from '@angular/fire/storage';

// const { Camera } = Plugins;


@Component({
  selector: 'app-add-update-company-image',
  templateUrl: './add-update-company-image.page.html',
  styleUrls: ['./add-update-company-image.page.scss'],
})
export class AddUpdateCompanyImagePage implements OnInit, OnDestroy {

  // private companyId: string;
  // company: Company;
  // currentLanguage: string;
  // destroyed = new Subject();
  // isCaptureImage = false;
  // capturedImage: string;
  // selectedPhoto: any;
  // photos: ExtraImagesViewModel[] = [];

  // constructor(
  //   private location: Location,
  //   private activatedRoute: ActivatedRoute,
  //   private adminService: AdminService,
  //   private languageService: LanguageService,
  //   private transalte: TranslateService,
  //   private utilityService: UtilityService,
  //   private actionSheetController: ActionSheetController,
  //   private angularFireStorage: AngularFireStorage) { }

  ngOnInit(): void {
  //   this.ionViewWillEnter();
  }

  ngOnDestroy(): void {
  //   this.destroyed.next();
  //   this.destroyed.complete();
  }


  // ionViewWillEnter(): void {
  //   this.companyId = this.activatedRoute.snapshot.paramMap.get('id');
  //   this.subscribeLanguageChanged();
  //   this.getAllExtaImages();
  //   this.getCompany();
  //   console.log('com', this.companyId);
  // }

  // backToPreviousPage(): void {
  //   this.location.back();
  // }

  // removeImage(item: ExtraImagesViewModel) :void {
  //   console.log('arr', this.photos);
  //   const index = this.photos.findIndex(i => i.index === item.index);
  //   console.log('imageKey', item);
  //   this.photos.splice(index, 1);
  // }

  // removeImageFromServer(item: ExtraImagesViewModel): void {
  //   this.utilityService.showLoading().then((loading: any) => {
  //   this.adminService.removeExtraImage(item.id).then(() => {
  //     this.utilityService.showServerMessage(this.transalte.instant('removedSuccessfully'), 'success');
  //     loading.dismiss();
  //     }).catch((err) => {
  //       loading.dismiss();
  //       this.utilityService.showServerMessage(err.message, 'danger');
  //     });
  //   });
  // }

  // async selectImageSource() {
  //   if (this.photos.length < 4) {
  //     const isAnyImageNotUploaded = this.photos.find(i => i.isUploaded === false);
  //     if (isAnyImageNotUploaded) {
  //       this.utilityService.showServerMessage(this.transalte.instant('youShouldUploadPerviuosImageOrRemove'), 'warning');
  //     } else {
  //       console.log('length', this.photos.length);
  //       const buttons = [
  //         {
  //           text: this.transalte.instant('takePhoto'),
  //           icon: 'camera',
  //           handler: () => {
  //             this.captureImage(CameraSource.Camera);
  //           }
  //         },
  //         {
  //           text: this.transalte.instant('chooseFromGallery'),
  //           icon: 'image',
  //           handler: () => {
  //             this.captureImage(CameraSource.Photos);
  //           }
  //         }
  //       ];
    
  //       const actionSheet = await this.actionSheetController.create({
  //         header: this.transalte.instant('select'),
  //         buttons,
  //         mode: 'ios'
  //       });
  //       await actionSheet.present();
  //     }
  //   } else {
  //     this.utilityService.showServerMessage(this.transalte.instant('maxImagesIs4'), 'warning');
  //   }
  // }

  // async captureImage(cameraSource: CameraSource) {
  //   const options: CameraOptions = {
  //     quality: 60,
  //     allowEditing: false,
  //     resultType: CameraResultType.DataUrl,
  //     source: cameraSource,
  //   };
  //   Camera.getPhoto(options).then((imgData) => {
  //     console.log('imagedata', imgData);
  //     this.capturedImage = imgData.dataUrl;
  //     const counter = this.photos.length;
  //     const extraImage: ExtraImagesViewModel = {
  //       image: imgData.dataUrl,
  //       isUploaded: false,
  //       index: counter,
  //       showSpinner: false,
  //       showText: true
  //     };
  //     this.photos.push(extraImage);

  //     // this.photos.push({key: counter, value: imgData.dataUrl});
  //     console.log('this.photos', this.photos);

  //     this.selectedPhoto = this.utilityService.dataURLtoBlob('data:img/jpeg;base64' + imgData.dataUrl);
  //     // this.photos.push(this.selectedPhoto);
  //     this.isCaptureImage = true;
  //   }, err => {
  //     console.log('err', err);
  //   });
  // }

  // uploadImage(item: ExtraImagesViewModel): void {
  //   item.showSpinner = true;
  //   item.showText = false;
  //   const filePath =  `ExtraImages/${'image-'}${new Date().getTime()}`;
  //   const fileRef = this.angularFireStorage.ref(filePath);
  //   const selectedPhoto = this.utilityService.dataURLtoBlob('data:img/jpeg;base64' + item.image);
  //   this.angularFireStorage.upload(filePath, selectedPhoto).snapshotChanges().pipe(
  //     finalize(() => {
  //       fileRef.getDownloadURL().subscribe((url) => {
  //         const extraImage: ExtraImage = {
  //           companyId: this.companyId,
  //           image: url
  //         };
  //         this.adminService.addExtraImage(extraImage).then(() => {
  //           this.utilityService.showServerMessage(this.transalte.instant('addedSuccessfully'), 'success');
  //           this.callBack(item.index, true);
  //         }).catch((err) => {
  //           this.utilityService.showServerMessage(err.message, 'danger');
  //           this.callBack(item.index, false);
  //         });
  //       });
  //     })
  //   ).subscribe();
  // }

  // private callBack(item: number, isUploaded: boolean): void {
  //   const itemIndex = this.photos.findIndex(e => e.index === item);
  //   this.photos[itemIndex].isUploaded = isUploaded;
  //   this.photos[itemIndex].showSpinner = false;
  //   this.photos[itemIndex].showText = true;
  // }

  // private getCompany(): void {
  //   this.adminService.getCompanyById(this.companyId).subscribe((res: Company) => {
  //     this.company = res;
  //   });
  // }

  // private subscribeLanguageChanged(): void {
  //   this.languageService.appLanguage.pipe(takeUntil(this.destroyed)).subscribe(res => {
  //     this.currentLanguage = res;
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
  //             showSpinner: false,
  //             showText: true,
  //             isUploaded: true,
  //             index: index,
  //             id: item.id
  //           };
  //           this.photos.push(extra);
  //         });
  //       }
  //     }
  //   });
  // }

}
