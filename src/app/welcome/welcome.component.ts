import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { LoginComponent } from 'app/login/login.component';
import { RegisterComponent } from 'app/register/register.component';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class WelcomeComponent implements OnInit {

  currentLanguage: string;

  constructor(private modalControl: ModalController) { }

  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('lang') || 'ar';
  }

  async login(): Promise<void> {
    const modal = await this.modalControl.create({
      component: LoginComponent,
      animated: true,
      mode: 'ios',
      backdropDismiss: false
    });
    return await modal.present();
  }

  async register(): Promise<void> {
    const modal = await this.modalControl.create({
      component: RegisterComponent,
      animated: true,
      mode: 'ios',
      backdropDismiss: false
    });
    return await modal.present();
  }
}
