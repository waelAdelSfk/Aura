import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SharedModule } from 'app/shared/shared.module';
import { DataService, FireStoreService, ModalService } from '@app/services';
import { IRestaurant } from '@app/models';
import { ManageRestaurantComponent } from './manage-restaurant/manage-restaurant.component';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class RestaurantsComponent  implements OnInit {

  restaurants: Observable<IRestaurant[]>;

  constructor(
    private fireStoreService: FireStoreService,
    private modalService: ModalService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getAllRestaurants();
  }

  remove(restaurant: IRestaurant): void {
    this.dataService.remove(`restaurants/${restaurant.id}`);
  }

  async openAddEditModal(restaurant?: IRestaurant): Promise<void> {
    const modal = await this.modalService.create({
      component: ManageRestaurantComponent,
      componentProps: { restaurant: restaurant },
    });
    await modal.present();
  }

  private getAllRestaurants(): void {
    this.restaurants = this.fireStoreService.getAll('restaurants');
  }
}
