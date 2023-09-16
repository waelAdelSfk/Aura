import { NgModule } from '@angular/core';
import { AddUpdateCompanyImagePageRoutingModule } from './add-update-company-image-routing.module';
import { AddUpdateCompanyImagePage } from './add-update-company-image.page';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AddUpdateCompanyImagePageRoutingModule
  ],
  declarations: [AddUpdateCompanyImagePage]
})
export class AddUpdateCompanyImagePageModule {}
