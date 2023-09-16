import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Plugins } from '@capacitor/core';
// const { Storage } = Plugins;

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  // private userId: string;
  searchText: string;
  // constructor(private router: Router) { }

  ngOnInit(): void {
    this.ionViewWillEnter();
  }

  ionViewWillEnter(): void {
    //   this.getCurrentUser();
  }

  viewMyLocation(): void {
    //   this.router.navigate(['/Dashboard/Map/'], {queryParams: { userId: this.userId, nearby: true }});
  }

  viewComingSoon(): void {
    //   this.router.navigate(['/Dashboard/SearchList'], {queryParams: { commingSoon: true, searchText: '' }});

  }

  viewTrending(): void {
    //   this.router.navigate(['/Dashboard/SearchList'], {queryParams: { trending: true, searchText: '' }});
  }

  onBlur(): void {
    //   this.router.navigate(['/Dashboard/SearchList'], {queryParams: { searchText: this.searchText }});
  }

  cancelSearch(): void {
    //   this.searchText = '';
  }

  // private async getCurrentUser(): Promise<void> {
  //   const usrId  = await Storage.get({ key: 'userId' });
  //   if (usrId.value) {
  //       this.userId = usrId.value;
  //   }
  // }

  filter(searchText: string): void {
    //   this.searchText = searchText;
  }

}
