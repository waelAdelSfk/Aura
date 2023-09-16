import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { TranslationService } from './translation.service';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingController: LoadingController, private translationService: TranslationService) { }

  async create(): Promise<HTMLIonLoadingElement> {
    const loading: HTMLIonLoadingElement = await this.loadingController.create({
      message: this.translationService.instant('loading'),
      mode: 'ios',
      showBackdrop: true,
      backdropDismiss: false,
      keyboardClose: false,
      translucent: true,
      spinner: 'lines-sharp',
      animated: true
    });
    await loading.present();
    return loading;
  }
}
