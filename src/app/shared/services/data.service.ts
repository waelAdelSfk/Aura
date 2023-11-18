import { Injectable } from '@angular/core';

import { AlertService } from './alert.service';
import { FireStoreService } from './firestore.service';
import { LoadingService } from './loading.service';
import { ToastService } from './toast.service';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private alertService: AlertService,
    private fireStoreService: FireStoreService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private translationService: TranslationService
  ) { }

  add(collectionName: string, data: any): void {
    this.loadingService.create().then((loading: HTMLIonLoadingElement) => {
      this.fireStoreService.addDoc(collectionName, data).subscribe(() => {
        loading.dismiss();
        this.toastService.showToaster(this.translationService.instant('addedSuccessfully'), 'success');
      });
    });
  }



  update(path: string, data: any): void {
    this.loadingService.create().then((loading: HTMLIonLoadingElement) => {
      this.fireStoreService.updateDoc(path, data).subscribe(() => {
        loading.dismiss();
        this.toastService.showToaster(this.translationService.instant('updatedSuccessfully'), 'success');
      });
    });
  }

  softUpdate(path: string, data: any): void {
    // this.loadingService.create().then((loading: HTMLIonLoadingElement) => {
    this.fireStoreService.updateDoc(path, data);
    // .subscribe(() => {
    // loading.dismiss();
    // this.toastService.showToaster(this.translationService.instant('updatedSuccessfully'), 'success');
    // });
    // });
  }

  remove(path: string): void {
    this.alertService.create({
      confirmHandler: () => {
        this.loadingService.create().then((loading: HTMLIonLoadingElement) => {
          this.fireStoreService.delete(path).subscribe(() => {
            loading.dismiss();
            this.toastService.showToaster(this.translationService.instant('removedSuccessfully'), 'success');
          });
        });
      }
    });
  }
}
