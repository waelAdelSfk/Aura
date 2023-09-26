import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { AuthService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';
import { ForgetPasswordComponent } from 'app/forget-password/forget-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private modalController: ModalController
  ) { }

  ngOnInit(): void {
    this.initFormModels();
  }

  async close(): Promise<boolean> {
    return await this.modalController.dismiss();
  }


  async openForgetPasswordModal(): Promise<void> {
    this.close();
    const modal = await this.modalController.create({
      component: ForgetPasswordComponent,
      animated: true,
      cssClass: 'forgetPassword-modal',
      mode: 'ios',
      backdropDismiss: false,
      showBackdrop: false,
      breakpoints: [0.1, 0.5, 1],
      keyboardClose: true,
    });
    return await modal.present();
  }

  async login(): Promise<void> {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.close();
      const formValue = this.loginForm.value;
      this.authService.login(formValue.email, formValue.password);
    }
  }

  private initFormModels(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
