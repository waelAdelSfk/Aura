import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { ICategory } from '@app/models';
import { DataService, ModalService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class ManageCategoryComponent implements OnInit {

  manageForm: FormGroup;
  @Input() category: ICategory;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.initFormModel();
    if (this.category) {
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
      if (this.category) {
        this.dataService.update(`categories/${this.category.id}`, formValue);
      } else {
        this.dataService.add('categories', formValue);
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
    });
  }

  private patchFormModel(): void {
    this.manageForm.patchValue({
      name: this.category.name,
      image: this.category.image,
    });
  }
}
