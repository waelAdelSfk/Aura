import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SharedModule } from 'app/shared/shared.module';
import { DataService, FireStoreService, ModalService } from '@app/services';
import { ICategory } from '@app/models';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { Router } from '@angular/router';
import { CommonUtility } from '@app/utilities';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class CategoriesComponent extends CommonUtility implements OnInit {

  categories: Observable<ICategory[]>;

  constructor(
    private fireStoreService: FireStoreService,
    private modalService: ModalService,
    private dataService: DataService,
    private router: Router
  ) { super(); }

  ngOnInit(): void {
    this.getAllCategories();
  }

  remove(item: ICategory): void {
    this.dataService.remove(`categories/${item.id}`);
  }

  async openAddEditModal(category?: ICategory): Promise<void> {
    const modal = await this.modalService.create({
      component: ManageCategoryComponent,
      componentProps: { category: category },
    });
    await modal.present();
  }

  private getAllCategories(): void {
    this.categories = this.fireStoreService.getAll('categories');
  }

  navigateToCategoryList(category: ICategory): void {
    this.router.navigate([`/app/offer/${category.id}`]);
  }
}
