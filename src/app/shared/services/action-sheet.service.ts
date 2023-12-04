import { Injectable } from '@angular/core';
import { ActionSheetController, ActionSheetOptions } from '@ionic/angular';

import { TranslationService } from './translation.service';


@Injectable({
  providedIn: 'root'
})
export class ActionSheetService {

  constructor(private actionSheetController: ActionSheetController, private translationService: TranslationService) { }

  create(opts: ActionSheetOptions): Promise<any> {
    return this.actionSheetController.create({
      mode: 'ios',
      backdropDismiss: false,
      keyboardClose: false,
      translucent: true,
      animated: true,
      ...opts,
      header: this.translationService.instant(opts.header ?? 'Please Select'),
    })
  }
}
