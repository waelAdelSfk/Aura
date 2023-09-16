import { Injectable } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ModalService {

  constructor(private modalController: ModalController) { }

  async create(opts: ModalOptions): Promise<HTMLIonModalElement> {
    const modal: HTMLIonModalElement = await this.modalController.create({
      ...opts,
      mode: 'ios',
      backdropDismiss: false,
      keyboardClose: false,
      showBackdrop: true
    });
    return modal;
  }

  dismiss(data?: any, role?: string, id?: string): void {
    this.modalController.dismiss(data, role, id);
  }
}
