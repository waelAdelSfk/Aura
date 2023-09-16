import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AdminService } from '../shared/services/admin.service';
// import { Company, CompanyDto } from '../shared/models/company';
// import { LanguageService } from '../shared/services/language.service';
// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { Plugins } from '@capacitor/core';
// import { NavController } from '@ionic/angular';
// declare var google;
// const { Geolocation } = Plugins;

@Component({
  selector: 'app-map-details',
  templateUrl: './map-details.page.html',
  styleUrls: ['./map-details.page.scss'],
})
export class MapDetailsPage implements OnInit {

  // markers: any[] = [];
  // map: any;
  // private companyId: string;
  // company: Company;
  // currentLanguage: string;
  // destroyed = new Subject();
  // isNearby = false;
  // isMyCurrentLocation = false;
  // isCompanyLocation = false;
  // categoryId: string;


  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private adminService: AdminService,
  //   private languageService: LanguageService,
  //   private navController: NavController) { }

  ngOnInit(): void {
  //   this.subscribeLanguageChanged();
   
  //   this.activatedRoute.queryParamMap.subscribe(res => {
  //     this.initMap();
  //     if (res.has('compId')) {
  //       this.isCompanyLocation = true;
  //       this.companyId = res['params'].compId;
  //       this.getCompany();
  //     }

  //     if (res.has('cId')) {
  //       this.categoryId = res['params'].cId;
  //     }

  //     if (res.has('userId') && res.get('nearby') == 'false') {
  //       this.isMyCurrentLocation = true;
  //       this.getCurrentPosition();
  //     }

  //     if (res.has('userId') && res.has('nearby') && res.get('nearby') == 'true') {
  //       this.isNearby = true;
  //       this.getCurrentPosition();
  //       this.getAllCompanies();
  //     }
  //   });
  }


  // backToPreviousPage(): void {
  //   this.navController.back();
  // }

  // private async getCurrentPosition() {
  //   await Geolocation.getCurrentPosition().then(pos => {
  //     if (pos.coords.latitude && pos.coords.longitude) {
  //       this.updateMap(pos.coords.latitude, pos.coords.longitude);
  //     }
  //   }).catch(err => {
  //     console.log('error', err);
  //   });
  // }


  // private initMap(): void {
  //   this.map = new google.maps.Map(
  //     document.getElementById('mapDetails') as HTMLElement,
  //     {
  //       zoom: 4,
  //       center: { lat: 29, lng: 47 },
  //     }
  //   );
  // }

  // private updateMap(lat: number, long: number): void {
  //   const latLang = new google.maps.LatLng(lat, long);
  //   const marker = new google.maps.Marker({
  //     position: latLang,
  //     animation: google.maps.Animation.DROP,
  //     map: this.map
  //   });
  //   this.map.setCenter(latLang);
  //   this.map.setZoom(5);
  // }

  // private getCompany(): void {
  //   this.adminService.getCompanyById(this.companyId).subscribe((res: Company) => {
  //     this.company = res;
  //     if (res.latitude && res.longitude) {
  //       this.updateMap(res.latitude, res.longitude);
  //     }
  //   });
  // }

  // private subscribeLanguageChanged(): void {
  //   this.languageService.appLanguage.pipe(takeUntil(this.destroyed)).subscribe(res => {
  //     this.currentLanguage = res;
  //   });
  // }

  // private addMarker(location) {
  //   const marker = new google.maps.Marker({
  //     position: location,
  //     map: this.map,
  //   });
  //   this.markers.push(marker);
  // }

  // private getAllCompanies(): void {
  //   this.adminService.getSubAdminCompanies().subscribe((res: CompanyDto[]) => {
  //     res.map(item => {
  //       const marker = {
  //         lat: item.data.latitude,
  //         lng: item.data.longitude
  //       };
  //       this.addMarker(marker);
  //     });
  //   });
  // }
}
