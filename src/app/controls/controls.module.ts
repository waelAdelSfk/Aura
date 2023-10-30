import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { MaterialModule } from 'app/shared/modules/material.module';
// import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const components = [
  DatePickerComponent,
  TimePickerComponent,
];


const modules = [
  CommonModule,
  // IonicModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,

];

@NgModule({
  declarations: components,
  imports: modules,
  exports: [...components, ...modules]
})
export class ControlsModule { }
