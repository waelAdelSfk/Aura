import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOffers, IRate, IUser } from '@app/models';
import { DataService, FireStoreService, ModalService } from '@app/services';
import { CommonUtility } from '@app/utilities';
import { SharedModule } from 'app/shared/shared.module';
import { Observable, map } from 'rxjs';
import { AddRatingComponent } from './add-rating/add-rating.component';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class RatingComponent extends CommonUtility implements OnInit {

  users: IUser[] = [];
  currentUserId: string;
  rates: Observable<IRate[]>;
  myStars: number[] = [1, 2, 3, 4, 5];
  isDataLoadingNow = true;
  defaultImage = 'assets/images/avatar.png';

  constructor(
    private fireStoreService: FireStoreService,
    private activatedRoute: ActivatedRoute,
    private modalService: ModalService,
    private dataService: DataService,
  ) { super(); }

  get itemId(): string {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getAllRates();
  }

  remove(item: IRate): void {
    this.dataService.remove(`rating/${item.id}`);
  }


  getUserName(userId: string): string {
    if (this.users?.length > 0) {
      const u = this.users.find(u => u.id === userId);
      return u && u?.name ? u.name : '';
    }
    return '';
  }

  getUserImage(userId: string): string {
    if (this.users?.length > 0) {
      const u = this.users.find(u => u.id === userId);
      return u && u.image != null && u.image != '' ? u.image : this.defaultImage;
    }
    return this.defaultImage;
  }


  async openAddEditModal(offer?: IOffers): Promise<void> {
    const modal = await this.modalService.create({
      component: AddRatingComponent,
      componentProps: {
        item: offer,
        itemId: this.itemId
      },
    });
    await modal.present();
  }

  async rate(offer: IOffers): Promise<void> {
    const modal = await this.modalService.create({
      component: AddRatingComponent,
      componentProps: {
        itemId: offer.id,
      },
    });
    await modal.present();
  }

  private getAllRates(): void {

    this.rates = this.fireStoreService.getAll<IRate>('rating').pipe(map((data: IRate[]) =>
      data.filter((r) => r.itemId === this.itemId).sort((a: any, b: any) => b.date - a.date)));
    this.fireStoreService.getAll<IUser>('users').subscribe((res) => {
      this.users = res;
    });
    this.isDataLoadingNow = false;
  }


}
