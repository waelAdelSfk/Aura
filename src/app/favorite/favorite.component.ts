import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';
import { CommonUtility } from '@app/utilities';
import { IFavorite } from '@app/models';
import { Observable } from 'rxjs';
import { FireStoreService } from '@app/services';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  standalone: true,
  imports: [SharedModule, FavoriteCardComponent]
})
export class FavoriteComponent extends CommonUtility {

  favoriteItems: Observable<IFavorite[]>;

  isDataLoadingNow = true;

  constructor(
    private fireStoreService: FireStoreService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();

  }

  ionViewWillEnter(): void {
    // this.getFavoriteItems();
    this.getFavoriteList();
    console.log('favoriteItems', this.favoriteItems);
  }

  reloadList(): void {
    this.getFavoriteList();
    // this.getFavoriteItems();
    this.changeDetectorRef.detectChanges();
  }



  // private getFavoriteItems(): void {
  //   this.favoriteItems = this.fireStoreService.getAll('favorite')
  //     .pipe(map(data => data.filter((res: IFavorite) => res.userId === this.userId)))
  //   this.isDataLoadingNow = false;
  // }

  private getFavoriteList(): void {
    this.favoriteItems = this.fireStoreService.getUserFavorite(this.userId);
    this.isDataLoadingNow = false;
    console.log('favorite', this.favoriteItems)
  }



}
