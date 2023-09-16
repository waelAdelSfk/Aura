import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { ControlContainer, FormGroupDirective, NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';
import { finalize } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Camera, CameraResultType, CameraSource, ImageOptions, Photo } from '@capacitor/camera';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { ValueAccessorBase } from '@app/utilities';
import { ActionSheetService, LoadingService } from '@app/services';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploaderComponent),
      multi: true
    }
  ]
})
export class UploaderComponent extends ValueAccessorBase<string> {

  selectedImage = 'assets/images/avatar.png';
  @Output() imgChange: EventEmitter<string> = new EventEmitter<string>();
  isImageExceededMaxSize = false;

  get form(): NgForm | FormGroupDirective | null {
    return this.parent ? this.parent.formDirective as NgForm | FormGroupDirective : null;
  }

  constructor(
    private translateService: TranslateService,
    private actionSheetService: ActionSheetService,
    private parent: ControlContainer,
    private loadingService: LoadingService,
    private angularFireStorage: AngularFireStorage
  ) {
    super();
  }

  writeValue(val: string): void {
    this.value = val;
    if (val) {
      this.selectedImage = val;
    }
  }

  async selectImageSource(): Promise<void> {
    const actionSheet = await this.actionSheetService.create({
      buttons: [
        {
          text: this.translateService.instant('takePhoto'),
          handler: () => {
            this.captureImage(CameraSource.Camera);
          }
        },
        {
          text: this.translateService.instant('chooseFromGallery'),
          handler: () => {
            this.captureImage(CameraSource.Photos);
          }
        },
        {
          text: this.translateService.instant('cancel'),
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  private async captureImage(pictureSource: CameraSource): Promise<void> {
    const options: ImageOptions = {
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      saveToGallery: false,
      source: pictureSource
    };
    const capturedPhoto: Photo = await Camera.getPhoto(options);
    const image = capturedPhoto.dataUrl;
    if (image) {
      this.uploadImage(image);
    }
  }

  private async uploadImage(image: string): Promise<void> {
    const threeMB = 3145728;
    if (new Blob([image]).size > threeMB) {
      this.isImageExceededMaxSize = true;
    } else {
      this.isImageExceededMaxSize = false;
      this.loadingService.create().then(async (loading: HTMLIonLoadingElement) => {
        const response = await fetch(image);
        const blob = await response.blob();
        const filePath = `images/${new Date().getTime()}`;
        const storageRef = this.angularFireStorage.ref(filePath);
        const task = this.angularFireStorage.upload(filePath, blob, {
          cacheControl: 'max-age=2592000,public'
        });
        task.snapshotChanges().pipe(
          finalize(() => {
            storageRef.getDownloadURL().subscribe(url => {
              if (url) {
                this.selectedImage = url;
                this.imgChange.emit(url);
                loading.dismiss();
              }
            });
          }),
        ).subscribe();
      });
    }
  }
}
