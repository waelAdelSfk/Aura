import { NgModule } from '@angular/core';
import { OffersPageRoutingModule } from './offers-routing.module';
import { OffersPage } from './offers.page';
import { SharedModule } from '../shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    SharedModule,
    OffersPageRoutingModule
  ],
  declarations: [OffersPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OffersPageModule { }
