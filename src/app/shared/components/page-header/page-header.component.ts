import { AnimationOptions } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { IonSearchbar, NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  @Input() hasSearchIcon = false;
  @Input() hasBackIcon = false;
  @Input() title: string;
  @Input() color: string = 'primary';
  @ViewChild('filterInput') filterInput: IonSearchbar;
  @Output() filterData: EventEmitter<string> = new EventEmitter<string>();
  isSearchInputVisible = false;
  searchText = '';
  backButtonClass: string;
  headerColor: string;


  get isAr(): boolean {
    return localStorage.getItem('lang') === 'ar';
  }


  constructor(
    private navController: NavController
  ) { }

  ngOnInit(): void {
    this.backButtonClass = `chevron-${localStorage.getItem('lang') == 'ar' ? 'forward' : 'back'}-outline`;
  }

  toggleSearchInput(): void {
    this.isSearchInputVisible = !this.isSearchInputVisible;
    if (this.isSearchInputVisible && Capacitor.getPlatform() !== 'web') {
      this.filterInput.setFocus();
    }
    if (!this.isSearchInputVisible) {
      this.cancelSearch();
    }
  }

  cancelSearch(): void {
    this.filterData.emit('');
    this.searchText = '';
    this.filterInput.setFocus();
  }

  filter(searchText: string): void {
    this.filterData.emit(searchText);
  }


  back(options?: AnimationOptions): void {
    this.navController.back({ ...options, animated: true });
  }

}
