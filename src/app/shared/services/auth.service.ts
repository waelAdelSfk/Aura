import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, BehaviorSubject } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Timestamp } from '@angular/fire/firestore';
import { FirebaseError } from '@angular/fire/app';

import { IUser } from '@app/models';
import { LoadingService } from './loading.service';
import { AlertService } from './alert.service';
import { FireStoreService } from './firestore.service';
import { AccountStatus, Role } from '@app/enums';
import { ToastService } from './toast.service';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: Observable<boolean>;
  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private fireStoreService: FireStoreService,
    private alertService: AlertService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private translationService: TranslationService
  ) {
    this.isLoggedIn = angularFireAuth.authState.pipe(map(user => !!user));
    this.setIsAdmin();
  }

  async register(userData: any): Promise<void> {
    this.loadingService.create().then((loading: HTMLIonLoadingElement) => {
      this.angularFireAuth.createUserWithEmailAndPassword(userData.email, userData.password)
        .then((data: any) => {
          if (data && data.user) {
            const activity = userData.role === Role.user ? AccountStatus.approved : AccountStatus.pending;
            const subscription = userData.role === Role.shopOwner ? userData.subscriberList = [] : '';
            const userInfo: IUser = {
              ...userData,
              id: data.user.multiFactor.user.uid,
              status: activity,
              subscriberList: subscription,
              creationDate: Timestamp.fromDate(new Date())
            };
            this.fireStoreService.setUserDoc(userInfo).then(() => {
              loading.dismiss();
              this.angularFireAuth.signOut();
            });
          }
        }).then(() => {
          loading.dismiss();
          this.toastService.showToaster(this.translationService.instant('accountCreatedSuccessfully'));
        }).catch((error: FirebaseError) => {
          loading.dismiss();
          this.showErrorMessage(error.code);
        });
    });
  }

  async logout(): Promise<void> {
    return this.alertService.create(
      {
        header: 'confirmation',
        message: 'sureToLogout',
        confirmHandler: () => {
          localStorage.removeItem('userId');
          localStorage.removeItem('role');
          this.angularFireAuth.signOut().then(() => {
            window.location.reload();
          });
        }
      }
    );
  }

  async login(email: string, password: string): Promise<void> {
    this.loadingService.create().then((loading: HTMLIonLoadingElement) => {
      if (email === 'admin@admin.com') {
        this.signInWithEmailAndPassword(email, password);
      } else {
        this.fireStoreService.getUserByEmail(email).subscribe((usersList: Array<IUser>) => {
          if (usersList && usersList.length > 0) {
            const user = (usersList && usersList.length > 0) ? usersList[0] : null;
            if (user && user != null) {
              if (user.status === AccountStatus.approved) {
                this.signInWithEmailAndPassword(email, password);
              } else {
                this.showErrorMessage('accountNotActive');
              }
            } else {
              this.showErrorMessage('wrongCredential');
            }
          } else {
            this.showErrorMessage('wrongCredential');
          }
        });
      }
      loading.dismiss();
    });
  }

  async resetPassword(email: string): Promise<void> {
    this.loadingService.create().then((loading: HTMLIonLoadingElement) => {
      this.angularFireAuth.sendPasswordResetEmail(email).then(() => {
        loading.dismiss();
        this.showErrorMessage('pleaseCheckYourEmail');
      }).catch((error) => {
        loading.dismiss();
        this.toastService.showToaster(error.message, 'danger');
      });
    });
  }

  private setCredentialOnLocalStorage(userId: string): void {
    this.fireStoreService.getById<IUser>(`users/${userId}`).subscribe((user: IUser) => {
      if (user) {
        localStorage.setItem('role', user.role.toString());
        localStorage.setItem('userId', user.id);
        this.setIsAdmin();
        this.router.navigateByUrl('/app/home');
      }
    });
  }

  private setIsAdmin(): void {
    const isAdmin = localStorage.getItem('role') === Role.admin.toString();
    this.isAdmin.next(isAdmin);
  }

  private showErrorMessage(errorKey: string): void {
    const message = errorMessages[errorKey] || 'somethingWentWrong';
    this.toastService.showToaster(this.translationService.instant(message), 'danger');
  }

  private signInWithEmailAndPassword(email: string, password: string): void {
    // firebase.auth.UserCredential
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then((data: any) => {
      if (data && data.user) {
        this.setCredentialOnLocalStorage(data.user.uid);
      } else {
        this.showErrorMessage('verifyYourEmailAddress');
      }
    }).catch((error: FirebaseError) => {
      this.showErrorMessage(error.code);
    });
  }
}

export const errorMessages: { [key: string]: string } = {
  'accountNotActive': 'accountNotActive',
  'pleaseCheckYourEmail': 'pleaseCheckYourEmail',
  'wrongCredential': 'wrongCredential',
  'yourAccountNotActive': 'Your account has not been activated.',
  'verifyYourEmailAddress': 'Please verify your email address.',
  'auth/wrong-password': 'wrongPassword',
  'auth/network-request-failed': 'Please check your internet connection',
  'auth/too-many-requests': 'We have detected too many requests from your device. Take a break please!',
  'auth/user-disabled': 'Your account has been disabled or deleted. Please contact the system administrator.',
  'auth/requires-recent-login': 'Please login again and try again!',
  'auth/email-already-exists': 'Email address is already in use by an existing user.',
  'auth/user-not-found': 'User not found.',
  'auth/phone-number-already-exists': 'The phone number is already in use by an existing user.',
  'auth/invalid-phone-number': 'The phone number is not a valid phone number!',
  'auth/invalid-email': 'The email address is not a valid email address!',
  'auth/cannot-delete-own-user-account': 'You cannot delete your own user account.',
  'auth/email-already-in-use': 'This email address already has an account.',
  'auth/configuration-not-found': 'Configuration not found.',
  'somethingWentWrong': 'somethingWentWrong'
};
