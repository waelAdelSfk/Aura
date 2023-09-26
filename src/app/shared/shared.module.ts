import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { EmptyDataComponent } from './components/empty-data/empty-data.component';
import { RateComponent } from './components/rate/rate.component';
import { ListMenuComponent } from './components/list-menu/list-menu.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FilterComponent } from './components/filter/filter.component';
import { SkeltonComponent } from './components/skelton/skelton.component';
import { MaterialModule } from './modules/material.module';
import { InputComponent } from './components/input/input.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const modules = [
  TranslateModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  IonicModule,
  MaterialModule,
];

const components = [
  SkeltonComponent,
  EmptyDataComponent,
  RateComponent,
  ListMenuComponent,
  FeedbackComponent,
  FilterComponent,
  InputComponent,
  PageNotFoundComponent,
  UploaderComponent
];

@NgModule({
  declarations: components,
  imports: modules,
  exports: [...components, ...modules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule { }
