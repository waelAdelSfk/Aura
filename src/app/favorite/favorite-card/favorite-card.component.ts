import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IFavorite, IOffers } from '@app/models';
import { AlertService, FavoriteService, FireStoreService, LoadingService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';
import { map } from 'rxjs';
// import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class FavoriteCardComponent implements OnInit {

  @Input() item: IFavorite;
  @Output() fireReload: EventEmitter<void> = new EventEmitter<void>();
  element: IOffers;

  constructor(
    private favoriteService: FavoriteService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private fireStoreService: FireStoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getItemDetails();
  }

  remove(): void {
    this.alertService.create({
      confirmHandler: () => {
        this.loadingService.create().then(async (loading: HTMLIonLoadingElement) => {
          return this.favoriteService.remove(this.item.id).subscribe(() => {
            this.fireReload.emit();
            loading.dismiss();
          });
        });
      }
    });
  }

  viewDetails(): void {
    if (this.element) {
      this.router.navigateByUrl(`app/details/${this.element.id}`);
    }
  }



  private getItemDetails(): void {
    this.fireStoreService.getAll('offersList').pipe(
      map(data => data.find((res: IOffers) => res.id === this.item.itemId)))
      .subscribe((offer: IOffers) => {
        if (offer) {
          this.element = offer;
        }
      });
  }


}
