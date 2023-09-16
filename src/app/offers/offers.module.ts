import { NgModule } from '@angular/core';
import { OffersPageRoutingModule } from './offers-routing.module';
import { OffersPage } from './offers.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OffersPageRoutingModule
  ],
  declarations: [OffersPage]
})
export class OffersPageModule {}
