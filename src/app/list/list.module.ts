import { NgModule } from '@angular/core';
import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from './list.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ListPageRoutingModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
