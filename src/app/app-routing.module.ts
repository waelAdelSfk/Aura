import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { IntroComponent } from './intro/intro.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/guard/auth.guard';
// import { IntroGuard } from './shared/guard/intro.guard';
import { AutoLoginGuard } from './shared/guard/auto-login.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { CategoriesComponent } from './categories/categories.component';
// import { UsersComponent } from './users/UsersComponent';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OfferComponent } from './offer/offer.component';
import { UsersComponent } from './users/users.component';
import { RatingComponent } from './rating/rating.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, canActivate: [AutoLoginGuard] },
  // { path: 'intro', component: IntroComponent, canActivate: [IntroGuard] },
  {
    path: 'app', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'restaurants', component: RestaurantsComponent },
      { path: 'offer', component: OfferComponent },
      { path: 'favorite', component: FavoriteComponent },
      { path: 'offer/:id', loadComponent: () => import('./offer/offer.component').then(m => m.OfferComponent) },
      { path: 'rating', component: RatingComponent },
      { path: 'rating/:id', loadComponent: () => import('./rating/rating.component').then(m => m.RatingComponent) },
      { path: 'details/:id', loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent) },
      // {
      //   path: `${'offer'}/:id`,
      //   loadComponent: () => import('./offer/offer.component').then(m => m.OfferComponent)
      // },

      // {path: 'admin', loadComponent: () => import('./admin/panel.component').then(mod => mod.AdminPanelComponent)},
      // {
      //   path: 'liked',
      //   loadChildren: () => import('../liked/liked.module').then( m => m.LikedPageModule)
      // },
      // {
      //   path: 'history',
      //   loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
      // },
      // {
      //   path: 'settings',
      //   loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      // },
      // {
      //   path: 'Details/:id',
      //   loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)
      // },
      // {
      //   path: 'list/:id',
      //   loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
      // },
      // {
      //   path: 'Company',
      //   loadChildren: () => import('../Admin/company/company.module').then( m => m.CompanyPageModule)
      // },
      // {
      //   path: 'AddUpdateCategory/:id',
      //   loadChildren: () => import('../Admin/add-update-category/add-update-category.module').then( m => m.AddUpdateCategoryPageModule)
      // },
      // {
      //   path: 'addUpdateCompany/:id',
      //   loadChildren: () => import('../Admin/add-update-company/add-update-company.module').then( m => m.AddUpdateCompanyPageModule)
      // },
      // {
      //   path: 'UserDetails/:id',
      //   loadChildren: () => import('../Admin/user-details/user-details.module').then( m => m.UserDetailsPageModule)
      // },
      // {
      //   path: 'Search',
      //   loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
      // },
      // {
      //   path: 'AddUpdateCompanyImage/:id',
      //   loadChildren: () => import('../Admin/add-update-company-image/add-update-company-image.module').then( m => m.AddUpdateCompanyImagePageModule)
      // },
      // {
      //   path: 'Map',
      //   loadChildren: () => import('../map-details/map-details.module').then( m => m.MapDetailsPageModule)
      // },
      // {
      //   path: 'SearchList',
      //   loadChildren: () => import('../search-list/search-list.module').then( m => m.SearchListPageModule)
      // },
      // {
      //   path: 'Offers',
      //   loadChildren: () => import('../offers/offers.module').then( m => m.OffersPageModule)
      // },
      // {
      //   path: 'AddUpdateOffer/:id',
      //   loadChildren: () => import('../add-update-offer/add-update-offer.module').then( m => m.AddUpdateOfferPageModule)
      // },
      { path: '', redirectTo: '/app/home', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
