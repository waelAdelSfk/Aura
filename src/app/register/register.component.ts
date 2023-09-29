import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { AuthService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';
import { mustMatch } from 'app/shared/validators/must-match.validators';
import { Role } from '@app/enums';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user = Role.user;
  shopOwner = Role.shopOwner;
  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initFormModels();
  }

  async close(): Promise<any> {
    await this.modalController.dismiss();
  }


  async register(): Promise<void> {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      this.close();
      const formValue = this.registerForm.value;
      this.authService.register(formValue);
    }
  }

  private initFormModels(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {
      validator: mustMatch('password', 'confirmPassword')
    });
  }
}
