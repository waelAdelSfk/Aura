// import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AlertController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';
// import { AuthService } from '../shared/services/auth.service';
// import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  // selectedLanguage: string;
  // customAlertOptions: any = {
  //   header: this.translateService.instant('pleaseSelectLanguage'),
  //   translucent: true,
  //   mode: 'ios',
  //   backdropDismiss: false,
  // };

  // languages: KeyValue<string, string>[] = [
  //   {
  //     key: 'ar',
  //     value: this.translateService.instant('arabic')
  //   },
  //   {
  //     key: 'en',
  //     value: this.translateService.instant('english')
  //   }
  // ];


  // constructor(
  //   private router: Router,
  //   private alertController: AlertController,
  //   private translateService: TranslateService,
  //   private languageService: LanguageService,
  //   private authService: AuthService
  // ) { }

  ngOnInit() {
  }

  // naviagteToPage(route: string): void {
  //   this.router.navigate([route]);
  // }

  // async logOut(): Promise<void> {
  //     const alert = await this.alertController.create({
  //       mode: 'ios',
  //       backdropDismiss: false,
  //       header: this.translateService.instant('logoutHeader'),
  //       message: this.translateService.instant('logoutMessage'),
  //       buttons: [
  //         {
  //           text: this.translateService.instant('okay'),
  //           handler: () => {
  //             this.authService.logout();
  //           }
  //         },
  //         {
  //           text: this.translateService.instant('cancel'),
  //           role: 'cancel',
  //           handler: () => {}
  //         }
  //       ]
  //     });
  //     await alert.present();
  // }

  // changeLanguage(event: any): void {
  //   if (this.selectedLanguage !== event.target.value) {
  //     this.selectedLanguage = event.target.value;
  //     this.languageService.changeLanguage(event.target.value);
  //     location.reload();
  //   }
  // }
}
