import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUpdateOfferPage } from './add-update-offer.page';

const routes: Routes = [
  {
    path: '',
    component: AddUpdateOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUpdateOfferPageRoutingModule {}
