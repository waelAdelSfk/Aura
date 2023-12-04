import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { EmptyDataComponent } from './components/empty-data/empty-data.component';
import { SkeltonComponent } from './components/skelton/skelton.component';
import { MaterialModule } from './modules/material.module';
import { InputComponent } from './components/input/input.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SelectComponent } from './components/select/select.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
// import { DatePickerComponent } from './components/date-picker/date-picker.component';


const modules = [
  TranslateModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  IonicModule,
  MaterialModule
];

const components = [
  SkeltonComponent,
  EmptyDataComponent,
  InputComponent,
  PageNotFoundComponent,
  UploaderComponent,
  SelectComponent,
  TextAreaComponent,
  PageHeaderComponent
  // DatePickerComponent,
];

@NgModule({
  declarations: components,
  imports: modules,
  exports: [...components, ...modules],
  providers: [
    DatePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
