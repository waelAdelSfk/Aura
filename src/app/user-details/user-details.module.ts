import { NgModule } from '@angular/core';

import { UserDetailsPageRoutingModule } from './user-details-routing.module';
import { UserDetailsPage } from './user-details.page';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    UserDetailsPageRoutingModule
  ],
  declarations: [UserDetailsPage]
})
export class UserDetailsPageModule {}
