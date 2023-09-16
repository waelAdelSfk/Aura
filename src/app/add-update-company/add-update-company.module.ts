import { NgModule } from '@angular/core';
import { AddUpdateCompanyPageRoutingModule } from './add-update-company-routing.module';
import { AddUpdateCompanyPage } from './add-update-company.page';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AddUpdateCompanyPageRoutingModule
  ],
  declarations: [AddUpdateCompanyPage]
})
export class AddUpdateCompanyPageModule {}
