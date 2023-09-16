import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '@app/models';

import { FireStoreService } from '@app/services';
import { CommonUtility } from '@app/utilities';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class ProfileComponent extends CommonUtility implements OnInit {

  profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private fireStoreService: FireStoreService,
  ) {
    super();
    this.initFormModels();
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  onImageChanged(img: string): void {
    if (img) {
      this.profileForm.patchValue({
        image: img
      });
    }
  }

  // onPositionChanged(pos: IPosition): void {
  //   if (pos) {
  //     this.profileForm.patchValue({
  //       position: pos
  //     });
  //   }
  // }



  private initFormModels(): void {
    this.profileForm = this.formBuilder.group({
      name: [null, Validators.required],
      // phoneNumber: [null],
      image: [null],
      // address: [null, Validators.required],
      // position: [null]
    });
  }

  save(): void {
    this.profileForm.markAllAsTouched();
    console.log('f', this.profileForm.value);
    if (this.profileForm.valid) {
      this.fireStoreService.updateDoc(`users/${this.userId}`, this.profileForm.value);
    }
  }

  private getUserInfo(): void {
    if (this.userId) {
      this.fireStoreService.getById<IUser>(`users/${this.userId}`).subscribe((user: IUser) => {
        if (user) {
          this.patchFormValue(user);
        }
      });
    }
  }

  private patchFormValue(user: IUser): void {
    this.profileForm.patchValue({
      name: user.name,
      image: this.isExistAndInitialized(user.image) ? user.image : '',
      // phoneNumber: this.isExistAndInitialized(user.phoneNumber) ? user.phoneNumber : null,
    });
  }
}
