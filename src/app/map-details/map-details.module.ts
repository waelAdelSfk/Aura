import { NgModule } from '@angular/core';
import { MapDetailsPageRoutingModule } from './map-details-routing.module';
import { MapDetailsPage } from './map-details.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MapDetailsPageRoutingModule
  ],
  declarations: [MapDetailsPage]
})
export class MapDetailsPageModule {}
