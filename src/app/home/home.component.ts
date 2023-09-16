import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICategory } from '@app/models';
import { FireStoreService } from '@app/services';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class HomeComponent implements OnInit {

  currentLanguage: string;
  categories: Array<ICategory> = [];

  constructor(
    private fireStoreService: FireStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCurrentLanguage();
    this.getCategories();
  }


  onFocus(): void {
    this.router.navigate(['/dashboard/Search']);
  }

  navigateToListPage(category: ICategory): void {
    this.router.navigate([`/dashboard/list/${category.id}`]);
  }

  private getCategories(): void {
    this.fireStoreService.getAll<ICategory>('categories').subscribe((res: Array<ICategory>) => {
      this.categories = res;
    });
  }

  private getCurrentLanguage(): void {
    this.currentLanguage = localStorage.getItem('lang') || 'ar';
  }
}
