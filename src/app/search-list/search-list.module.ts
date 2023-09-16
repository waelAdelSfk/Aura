import { NgModule } from '@angular/core';
import { SearchListPageRoutingModule } from './search-list-routing.module';
import { SearchListPage } from './search-list.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SearchListPageRoutingModule
  ],
  declarations: [SearchListPage]
})
export class SearchListPageModule {}
