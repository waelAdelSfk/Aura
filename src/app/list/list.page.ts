import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { FireStoreService } from '@app/services';
import { ICategory, ICompany, IUserRate } from '@app/models';
import { FilterComponent } from 'app/shared/components/filter/filter.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  rates: Array<IUserRate> = [];
  userId: string;
  role: string;
  companies: Array<ICompany> = [];
  companiesSearch: Array<ICompany> = [];
  isDataLoading = false;
  isSearchToolbar = false;
  searchText: string;
  categoryName: string;
  filterText: string;
  private categoryId: string;
  // private myLat: number;
  // private myLong: number;


  constructor(
    private router: Router,
    private fireStoreService: FireStoreService,
    private activatedRoute: ActivatedRoute,
    private modalControl: ModalController) {
    this.getCurrentUser();
   }

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getCategories();
    this.getAllRates();
    // this.utilityService.showLoading().then((loading: any) => {
    //   this.getCurrentUser();
    //   loading.dismiss();
    // });
    // this.getCurrentPosition();
    //  this.announceChangeService.announceFilterChanged.subscribe(res => {
    //    this.filterText = res;
    //    switch (res) {
    //      case 'aToZ':
    //       this.sorting();
    //       break;
    //       case 'rating':
    //         this.sortByRate(); 
    //       break;
    //       case 'nearToMe': 
    //       this.viewMyLocation(true);
    //       break;
    //       case '':
    //       default:
    //         this.getAllCompanies();
    //    }
    // });
  }

  filterCompaines(searchText: string): void {
    if (searchText !== '') {
      this.companies = this.companiesSearch.filter(com => com.name.toLocaleLowerCase().indexOf(searchText) !== -1);
    } else {
      this.ngOnInit();
    }
  }

  refreshPage(event: any): void {
    this.isDataLoading = false;
    this.companies = [];
    this.companiesSearch = [];
    this.getCompaniesDependOnRole(event);
  }


  showSearchToolbar(): void {
    this.isSearchToolbar = !this.isSearchToolbar;
  }


  cancelSearch(): void {
    this.getCompaniesDependOnRole();
  }

  navigateToDetailsPage(id: string): void {
    this.router.navigate([`/Dashboard/Details/${id}`]);
  }

  viewMyLocation(nearby: boolean = false): void {
    this.router.navigate(['/Dashboard/Map/'], {queryParams: { userId: this.userId, nearby, cId: this.categoryId }});
  }


  getCompanyRates(company: ICompany): number {
    const companyRates = this.rates.filter(item => item.companyId === company.id);
    if(companyRates.length > 0) {
      let newNumberArray: number[] = [];
      newNumberArray = companyRates.map(item => item.rate);
      const startNumber = newNumberArray.reduce((a,b) => a + b);
      const companyRatePercenatge = startNumber / newNumberArray.length;
      return Math.round(companyRatePercenatge);
    } else {
      return 0;
    }
  }

  async filter(): Promise<void> {
    const modal = await this.modalControl.create({
      component: FilterComponent,
      animated: true,
      mode: 'md',
      backdropDismiss: false,
      cssClass: 'filter-modal'
    });
    return await modal.present();
  }

  private getCurrentUser(): void {
    const usrId  = localStorage.getItem('userId');
    if (usrId) {
      this.userId = usrId;
      this.getCompaniesDependOnRole();
    }
  }

  //  private async getCurrentPosition(): Promise<void> {
  //   await Geolocation.getCurrentPosition().then(pos => {
  //     if (pos.coords.latitude && pos.coords.longitude) {
  //       this.myLat = pos.coords.latitude;
  //       this.myLong = pos.coords.longitude;
  //     }
  //   }).catch(err => {
  //     console.log('error', err);
  //   });
  // }

  private getCompaniesDependOnRole(event?: any): void {
    if (this.role === 'subAdmin') {
      // this.getSubAdminCompanies(this.userId, event);
    } else {
      this.getAllCompanies(event);
    }
  }

  private getAllCompanies(event?: any): void {
    this.fireStoreService.getAll<ICompany>('companies').subscribe((res: Array<ICompany>) => {
      this.companies = this.companiesSearch = res;
      this.isDataLoading = true;
      if (event) {
        event.target.complete();
      }
    });
  }

  private getCategories(): void {
    this.fireStoreService.getById<ICategory>(this.categoryId).subscribe(res => {
      this.categoryName = res.name;
    });
  }

  private getAllRates(): void {
    this.fireStoreService.getAll<IUserRate>('rates').subscribe((res: Array<IUserRate>) => {
      this.rates = res;
    });
  }

  // private sorting(): void {
  //   this.companies.sort((a, b) => b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase() ? -1 : 1);
  // }

  // private sortByRate(): void {
  //   this.companies.sort((a, b) => b.rate > a.rate ? 1 : -1);
  // }

}
