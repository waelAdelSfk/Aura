import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUpdateCompanyImagePage } from './add-update-company-image.page';

const routes: Routes = [
  {
    path: '',
    component: AddUpdateCompanyImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUpdateCompanyImagePageRoutingModule {}
