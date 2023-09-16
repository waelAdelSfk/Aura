import { NgModule } from '@angular/core';
import { DetailsPageRoutingModule } from './details-routing.module';
import { DetailsPage } from './details.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DetailsPageRoutingModule
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
