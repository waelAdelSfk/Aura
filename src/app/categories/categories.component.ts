import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SharedModule } from 'app/shared/shared.module';
import { DataService, FireStoreService, ModalService } from '@app/services';
import { ICategory } from '@app/models';
import { ManageCategoryComponent } from './manage-category/manage-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  standalone: true,
  imports: [SharedModule]
})
export class CategoriesComponent implements OnInit {

  categories: Observable<ICategory[]>;

  constructor(
    private fireStoreService: FireStoreService,
    private modalService: ModalService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  remove(category: ICategory): void {
    this.dataService.remove(`categories/${category.id}`);
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
}
