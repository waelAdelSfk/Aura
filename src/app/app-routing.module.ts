import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AutoLoginGuard } from './shared/guard/auto-login.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { OffersComponent } from './offers/offers.component';
import { UsersComponent } from './users/users.component';
import { RatingComponent } from './rating/rating.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, canActivate: [AutoLoginGuard] },
  {
    path: 'app', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'brands', component: UsersComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'offer', component: OffersComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'favorite', component: FavoriteComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'offer/:id', loadComponent: () => import('./offers/offers.component').then(m => m.OffersComponent) },
      { path: 'rating', component: RatingComponent },
      { path: 'rating/:id', loadComponent: () => import('./rating/rating.component').then(m => m.RatingComponent) },
      { path: 'details/:id', loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent) },
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
