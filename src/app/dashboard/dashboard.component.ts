import { Component } from '@angular/core';

import { MenuComponent } from 'app/menu/menu.component';
import { SharedModule } from 'app/shared/shared.module';
import { TabsComponent } from 'app/tabs/tabs.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [ SharedModule, MenuComponent, TabsComponent]
})
export class DashboardComponent {

}
