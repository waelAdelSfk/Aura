import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUpdateCompanyPage } from './add-update-company.page';

const routes: Routes = [
  {
    path: '',
    component: AddUpdateCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUpdateCompanyPageRoutingModule {}
