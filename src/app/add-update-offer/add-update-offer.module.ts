import { NgModule } from '@angular/core';
import { AddUpdateOfferPageRoutingModule } from './add-update-offer-routing.module';
import { AddUpdateOfferPage } from './add-update-offer.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AddUpdateOfferPageRoutingModule
  ],
  declarations: [AddUpdateOfferPage]
})
export class AddUpdateOfferPageModule {}
