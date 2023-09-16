import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { IMenu } from '@app/models';
import { SharedModule } from 'app/shared/shared.module';
import { AuthService, LanguageService } from '@app/services';
import { Role } from '@app/enums';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class MenuComponent {

  menuItems: Array<IMenu> = [
    {
      labelKey: 'home',
      url: 'home',
      icon: 'home',
      visibility: [Role.admin, Role.user]
    },
    {
      labelKey: 'restaurants',
      url: 'restaurants',
      icon: 'restaurant',
      visibility: [Role.admin, Role.user]
    },
    {
      labelKey: 'notifications',
      url: 'notifications',
      icon: 'notifications',
      visibility: [Role.admin, Role.user]
    },
    {
      labelKey: 'categories',
      url: 'categories',
      icon: 'folder',
      visibility: [Role.admin]
    },
    {
      labelKey: 'users',
      url: 'users',
      icon: 'people',
      visibility: [Role.admin]
    },
    {
      labelKey: 'profile',
      url: 'profile',
      icon: 'person',
      visibility: [Role.admin, Role.user]
    },
    {
      labelKey: 'feedback',
      url: 'feedback',
      icon: 'thumbs-down',
      visibility: [Role.admin, Role.user]
    }
  ];

  constructor(
    private router: Router,
    private menuController: MenuController,
    private authService: AuthService,
    private languageService: LanguageService,
  ) { }

  navigate(url: string): void {
    this.router.navigateByUrl(`app/${url}`);
  }

  isItemActive(pageUrl: string): boolean {
    return this.router.isActive(`app/${pageUrl}`, { paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored' });
  }

  async openLanguageSwitcher(): Promise<void> {
    this.closeMenu();
    this.languageService.openLanguageSwitcher();
  }

  async logOut(): Promise<void> {
    this.closeMenu();
    await this.authService.logout();
  }

  private closeMenu(): void {
    this.menuController.close('secureMenuId');
  }
}
