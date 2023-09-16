import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '@app/services';

@Injectable({
  providedIn: 'root'
})

export class AutoLoginGuard implements CanActivate {

  constructor(private authService: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.checkIfCanActiveUrl();
  }

  private checkIfCanActiveUrl(): Observable<boolean | UrlTree> {
    const role = localStorage.getItem('role');
    return this.authService.isLoggedIn.pipe(
      map(isAuthenticated => isAuthenticated && role ? this.router.parseUrl('/app/home') : true)
    );
  }

}
