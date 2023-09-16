import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { AuthService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class ForgetPasswordComponent  implements OnInit {

  forgetPasswordForm: FormGroup;

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

 async send(): Promise<void> {
  this.forgetPasswordForm.markAllAsTouched();
   if (this.forgetPasswordForm.valid) {
      this.close();
      const formValue = this.forgetPasswordForm.value;
      this.authService.resetPassword(formValue.email);
    }
  }

  private initFormModels(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
