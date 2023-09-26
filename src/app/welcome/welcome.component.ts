import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { LoginComponent } from 'app/login/login.component';
import { RegisterComponent } from 'app/register/register.component';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomeComponent implements OnInit {

  loginForm: FormGroup;

  currentLanguage: string;

  images: string[] = [
    'assets/welcome/firstImage.jpeg',
    'assets/welcome/secondImage.jpeg',
    'assets/welcome/thirdImage.jpeg',
    'assets/welcome/fourthImage.jpeg',
    'assets/welcome/fifthImage.jpeg',
    'assets/welcome/lastImage.jpeg',
  ];

  constructor(private modalControl: ModalController) { }

  swiperSlideChange(e: any) {

  }

  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('lang') || 'ar';
  }

  async login(): Promise<void> {
    const modal = await this.modalControl.create({
      component: LoginComponent,
      animated: true,
      cssClass: 'login-modal',
      mode: 'ios',
      backdropDismiss: false,
      showBackdrop: false,
      breakpoints: [0.1, 0.5, 1],
      keyboardClose: true,
    });
    return await modal.present();
  }

  async register(): Promise<void> {
    const modal = await this.modalControl.create({
      component: RegisterComponent,
      animated: true,
      cssClass: 'register-modal',
      mode: 'ios',
      backdropDismiss: false,
      showBackdrop: false,
      breakpoints: [0.1, 0.5, 1],
      keyboardClose: true,
      // initialBreakpoint: 0.5,  //define modal height
      // htmlAttributes?: { [key: string]: any },
      // breakpoints?: number[],
      // backdropBreakpoint: 0.5,
      // handle: true,
    });
    return await modal.present();
  }



}
