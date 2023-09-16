import { Injectable } from '@angular/core';

import { IUser } from '@app/models';
import { FireStoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<IUser> = [];

  constructor(private fireStoreService: FireStoreService) {
    this.getAllUsers();
  }

  getUserPropById(id: string, field: keyof IUser = 'name'): string {
    if (this.users && this.users.length > 0) {
      const user = this.users.find(u => u.id === id);
      if (user) {
        return user[field] as string;
      }
      return '';
    }
    return ''
  }

  private getAllUsers(): void {
    this.fireStoreService.getAll<IUser>('users').subscribe(data => {
      this.users = data;
      // console.log('users', this.users);
    });
  }
}
