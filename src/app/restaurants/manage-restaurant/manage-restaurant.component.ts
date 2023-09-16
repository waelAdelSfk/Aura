import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { IRestaurant } from '@app/models';
import { DataService, ModalService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-manage-restaurant',
  templateUrl: './manage-restaurant.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class ManageRestaurantComponent  implements OnInit {

  manageForm: FormGroup;
  @Input() restaurant: IRestaurant;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.initFormModel();
    if (this.restaurant) {
      this.patchFormModel();
    }
  }

  onImageChanged(img: string): void {
    if (img) {
      this.manageForm.patchValue({
        image: img
      });
    }
  }

  save(event: Event, manageFormRef: FormGroupDirective): void {
    manageFormRef.onSubmit(event);
    this.manageForm.markAllAsTouched();
    if (this.manageForm.valid) {
      const formValue = this.manageForm.value;
      if (this.restaurant) {
        this.dataService.update(`restaurants/${this.restaurant.id}`, formValue);
      } else {
        this.dataService.add('restaurants', formValue);
      }
      this.close();
    }
  }

  close(): void {
    this.modalService.dismiss();
  }

  private initFormModel(): void {
    this.manageForm = this.formBuilder.group({
      name: [null, Validators.required],
      image: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      location: [null, Validators.required],
      openingTimes: [null, Validators.required]
    });
  }

  private patchFormModel(): void {
    this.manageForm.patchValue({
      name: this.restaurant.name,
      image: this.restaurant.image,
      email: this.restaurant.email,
      phoneNumber: this.restaurant.phoneNumber,
      location: this.restaurant.location,
      openingTimes: this.restaurant.openingTimes
    });
  }
}
