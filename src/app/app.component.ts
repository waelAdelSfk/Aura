import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

import { StatusBar } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import { Toast } from '@capacitor/toast';
import { App } from '@capacitor/app';
import { AuthService, LanguageService, TranslationService } from './shared/services';
import { register } from 'swiper/element/bundle';
register();



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private lastBackButtonWasPressed = 0;
  private timePeriodToAction = 2000;
  isLoggedIn: Observable<boolean>;

  constructor(
    private languageService: LanguageService,
    private platform: Platform,
    private translationService: TranslationService,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      this.languageService.initAppLanguage();
      // this.fcmService.initPush();
      this.setStatusBarBackground();
      this.handleExitApp();
    });
  }

  private setStatusBarBackground(): void {
    if (Capacitor.isPluginAvailable('StatusBar')) {
      StatusBar.setBackgroundColor({ color: '#D71313' });
    }
  }

  private handleExitApp(): void {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.withDoublePress('pressAgainToExit', () => {
        App.exitApp();
      });
    });
  }

  private async withDoublePress(message: string, action: () => void) {
    const currentTime = new Date().getTime();
    if (currentTime - this.lastBackButtonWasPressed < this.timePeriodToAction) {
      action();
    } else {
      this.showNativeToast(message);
      this.lastBackButtonWasPressed = currentTime;
    }
  }

  private async showNativeToast(message: string): Promise<void> {
    await Toast.show({
      text: this.translationService.instant(message),
      duration: 'long',
      position: 'bottom'
    });
  }
}
