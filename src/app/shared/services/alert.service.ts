import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from '@ionic/angular';

import { TranslationService } from './translation.service';


interface IAlertOptions extends AlertOptions {
  confirmBtnTextKey?: string;
  cancelBtnTextKey?: string;
  confirmHandler?: (value: any) => boolean | void | {
    [key: string]: any;
  };
}


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController, private translationService: TranslationService) { }

  async create(options: IAlertOptions): Promise<void> {
    const alert = await this.alertController.create({
      mode: 'ios',
      backdropDismiss: false,
      keyboardClose: false,
      translucent: true,
      animated: true,
      header: this.getTranslateValue(options.header || 'confirmDelete'),
      message: this.getTranslateValue(options.message as string || 'areYouSureYouWantToDelete'),
      buttons: options.buttons ? options.buttons : [
        {
          cssClass: 'alert-delete-btn',
          text: this.getTranslateValue(options.confirmBtnTextKey || 'ok'),
          handler: (value) => options.confirmHandler ? options.confirmHandler(value) : () => {},
        },
        {
          text: this.getTranslateValue(options.cancelBtnTextKey || 'cancel'),
          role: 'cancel',
          cssClass: 'secondary'
        }
      ]
    });
    await alert.present();
  }

  private getTranslateValue(key: string): string {
    return this.translationService.instant(key);
  }
}
