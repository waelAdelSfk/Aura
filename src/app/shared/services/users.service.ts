import { Injectable } from '@angular/core';

import { IUser } from '@app/models';
import { FireStoreService } from './firestore.service';
import { Observable, map } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<IUser> = [];

  constructor(private fireStoreService: FireStoreService, private angularFireAuth: AngularFireAuth) {
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

  getCurrentLoggedInUser(): Observable<firebase.User> {
    return this.angularFireAuth.user.pipe(
      map(user => user || ({} as firebase.User))
    );
  }

  private getAllUsers(): void {
    this.fireStoreService.getAll<IUser>('users').subscribe(data => {
      this.users = data;
      // console.log('users', this.users);
    });
  }
}
