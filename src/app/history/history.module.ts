import { NgModule } from '@angular/core';
import { HistoryPageRoutingModule } from './history-routing.module';
import { HistoryPage } from './history.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HistoryPageRoutingModule
  ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
