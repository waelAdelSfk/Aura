import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { TranslationService } from './translation.service';
import { ActionSheetService } from './action-sheet.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  readonly html: HTMLElement;
  private currentLanguage = 'ar';

  constructor(private translateService: TranslationService,
    private actionSheetService: ActionSheetService, @Inject(DOCUMENT) private document: Document) {
      this.html = this.document.getElementsByTagName('html')[0];
      this.currentLanguage = localStorage.getItem('lang') ?? 'ar';
  }

  changeLanguage(): void {
    const lang = localStorage.getItem('lang') === 'ar' ? 'en' : 'ar';
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
    this.html.lang = lang;
    const currentDirection = (lang === 'ar') ? 'rtl' : 'ltr';
    this.document.body.dir = this.html.dir = this.document.documentElement.dir = currentDirection;
  }

  initAppLanguage(): void {
    this.translateService.setDefaultLang('en');
  }

  async openLanguageSwitcher(): Promise<void> {
    const actionSheet = await this.actionSheetService.create({
      header: this.getTranslatedKey('pleaseSelectLanguage'),
      cssClass: 'action-sheet-language',
      buttons: [
      {
        text: this.getTranslatedKey('arabic'),
        cssClass: this.getCssClasses('ar'),
        icon: this.getIcon('ar'),
        handler: () => {
          this.changeLanguage();
        }
      },
      {
        text: this.getTranslatedKey('english'),
        cssClass: this.getCssClasses('en'),
        icon: this.getIcon('en'),
        handler: () => {
          this.changeLanguage();
        }
      },
      {
        text: this.getTranslatedKey('cancel'),
        role: 'cancel',
        handler: () => {}
      }]
    });
    await actionSheet.present();
  }

  private getIcon(language: string): string {
    return language === this.currentLanguage ? 'check-mark-circle-outline' : '';
  }

  private getCssClasses(language: string): string {
    return language === this.currentLanguage ? 'selected-language' : '';
  }

  private getTranslatedKey(key: string): string {
    return this.translateService.instant(key);
  }
}
