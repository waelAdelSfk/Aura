import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { IMenu } from '@app/models';
import { SharedModule } from 'app/shared/shared.module';
import { AuthService, LanguageService } from '@app/services';
import { Role } from '@app/enums';
import { CommonUtility } from '@app/utilities';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class MenuComponent extends CommonUtility {

  menuItems: Array<IMenu> = [
    {
      labelKey: 'home',
      url: 'home',
      icon: 'home',
      visibility: [Role.admin, Role.user, Role.shopOwner]
    },
    {
      labelKey: 'notifications',
      url: 'notifications',
      icon: 'notifications',
      visibility: [Role.admin, Role.user]
    },
    {
      labelKey: 'favorite',
      url: 'favorite',
      icon: 'heart',
      visibility: [Role.user]
    },
    {
      labelKey: 'categories',
      url: 'categories',
      icon: 'folder',
      visibility: [Role.admin, Role.user]
    },
    {
      labelKey: 'brands',
      url: 'brands',
      icon: 'basket',
      visibility: [Role.admin, Role.user]
    },
    {
      labelKey: 'profile',
      url: 'profile',
      icon: 'person',
      visibility: [Role.admin, Role.user, Role.shopOwner]
    },
    {
      labelKey: 'offers',
      url: 'offer',
      icon: 'gift',
      visibility: [Role.admin, Role.shopOwner]
    },
    {
      labelKey: 'feedback',
      url: 'feedback',
      icon: 'thumbs-down',
      visibility: [Role.admin]
    },

  ];

  constructor(
    private router: Router,
    private menuController: MenuController,
    private authService: AuthService,
    private languageService: LanguageService,
  ) {
    super();
    this.setMenuItems();
  }

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

  private setMenuItems(): void {
    this.authService.isAdmin.subscribe(isAdmin => {
      if (isAdmin) {
        this.menuItems = this.menuItems.filter(m => m.visibility.includes(Role.admin));
      }
      if (this.isShopOwner) {
        this.menuItems = this.menuItems.filter(m => m.visibility.includes(Role.shopOwner));
      }
      if (this.isUser) {
        this.menuItems = this.menuItems.filter(m => m.visibility.includes(Role.user));
      }
    });
  }
}
