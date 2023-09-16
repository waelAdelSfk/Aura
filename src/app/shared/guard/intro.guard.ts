import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const skipIntro = localStorage.getItem('skipIntro') === 'true';
    if (skipIntro) {
      this.router.navigateByUrl('/welcome', { replaceUrl: true });
    }
    return !skipIntro;
  }
}
