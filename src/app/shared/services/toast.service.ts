import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { ToastType } from '@app/types';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async showToaster(message: string, color: ToastType = 'success'): Promise<void> {
    const toast: HTMLIonToastElement = await this.toastController.create({
      message,
      duration: 2000,
      color,
      keyboardClose: false,
      mode: 'ios',
      position: 'bottom',
      animated: true
    });
    toast.present();
  }
}
