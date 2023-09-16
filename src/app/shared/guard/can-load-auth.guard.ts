import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable, first, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()

export class CanLoadAuthGuard implements CanLoad {

    constructor(private authService: AuthService, private router: Router) {}

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
        return this.authService.isLoggedIn.pipe(
            first(), 
            tap(loggedIn => {
            if (!loggedIn) {
                this.router.navigateByUrl('');
            }
        }) )
    }
}