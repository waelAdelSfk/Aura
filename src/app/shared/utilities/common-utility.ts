import { Role } from '@app/enums';

export class CommonUtility {

  get currentLanguage(): string {
    return localStorage.getItem('lang') || 'ar';
  }

  get isArabic(): boolean {
    return this.currentLanguage === 'ar';
  }

  get isAdmin(): boolean {
    return localStorage.getItem('role') === Role.admin.toString();
  }
  get isUser(): boolean {
    return localStorage.getItem('role') === Role.user.toString();
  }
  get isShopOwner(): boolean {
    return localStorage.getItem('role') === Role.shopOwner.toString();
  }

  get userId(): string {
    const id = localStorage.getItem('userId');
    return id ?? '';
  }

  isExistAndInitialized(value: string | number): boolean {
    return (value && value != '' && value != null && value != undefined) ? true : false;
  }
}
