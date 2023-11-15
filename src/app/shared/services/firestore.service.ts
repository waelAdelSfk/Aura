import { Injectable } from '@angular/core';
import { Observable, from, map, of } from 'rxjs';

// import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  Firestore, collection, addDoc, collectionData, doc, updateDoc, setDoc, docData, PartialWithFieldValue,
  DocumentReference, where, Query, CollectionReference, query
} from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection, DocumentData, QueryFn } from '@angular/fire/compat/firestore';

import { NotificationType, Role } from '@app/enums';
import { IUser, ICollectionData, INotification, IFavorite } from '@app/models';
import { convertSnaps } from './db-utils';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  registerEmails: Array<string> = [];

  constructor(
    private firestore: Firestore,
    private angularFirestore: AngularFirestore,
    // private angularFireAuth: AngularFireAuth
  ) {
    // this.getRegisterEmails();
  }

  getDocumentRef(url: string): DocumentReference {
    return doc(this.firestore, url);
  }

  createId(): string {
    return this.angularFirestore.createId();
  }

  getAll<T>(collectionName: string): Observable<Array<T>> {
    return this.angularFirestore.collection(collectionName).snapshotChanges().pipe(
      map(snaps => convertSnaps<T>(snaps)),
    );
  }

  addDoc<T>(collectionName: string, data: PartialWithFieldValue<any>): Observable<DocumentReference<T>> {
    return from(addDoc(this.getCollection(collectionName), data));
  }



  async setUserDoc(user: IUser): Promise<void> {
    const docRef: DocumentReference = doc(this.firestore, `users/${user.id}`);
    return setDoc(docRef, user).then(() => {
      const shopOwner = user.role === Role.shopOwner;
      if (shopOwner) {
        const notification: Partial<INotification> = {
          userId: user.id,
          title: '',
          content: '',
          isAdminSeen: false,
          isUserSeen: false,
          isAdminRemoved: false,
          isUserRemoved: false,
          notificationType: NotificationType.newRegister,
          date: user.creationDate
        };
        this.addDoc('notifications', notification).subscribe();
      }
    }).catch((error) => {
      console.log('error', error);
    });
  }

  updateDoc(path: string, data: PartialWithFieldValue<any>): Observable<any> {
    const docRef = doc(this.firestore, path);
    return from(updateDoc(docRef, data));
  }


  delete(path: string): Observable<void> {
    return from(this.angularFirestore.doc(path).delete());
  }

  getById<T>(path: string): Observable<T> {
    const docRef = doc(this.firestore, path);
    return docData(docRef, { idField: 'id' }) as Observable<T>;
  }

  // getCurrentLoggedInUser(): Observable<any> {
  //   return this.angularFireAuth.user;
  // }

  getUserByEmail(email: string): Observable<Array<IUser>> {
    const collectionRef = collection(this.firestore, 'users');
    const documentQuery = query(collectionRef, where('email', '==', email));
    return collectionData(documentQuery, { idField: 'id' }) as Observable<Array<IUser>>;
  }

  collection<T>(path: string, queryFn?: QueryFn): AngularFirestoreCollection<T> {
    return this.angularFirestore.collection(path, queryFn);
  }

  getCollectionData(options: ICollectionData): Observable<Array<DocumentData>> {
    const documentQuery = query(this.getCollection(options.collectionName), where(options.fieldPath, options.opStr, options.value));
    return this.collectionData(documentQuery, { idField: options.idField }) as Observable<Array<DocumentData>>;
  }

  checkIfEmailExists(email: string): Observable<boolean> {
    return of(this.registerEmails?.includes(email));
  }

  getUserNotifications(userId: string): Observable<Array<INotification>> {
    const documentQuery = query(this.getCollection('notification'), where('userId', '==', userId));
    return collectionData(documentQuery, { idField: 'id' }) as Observable<Array<INotification>>;
  }

  async updateDocNotifications(collectionName: string, id: string, data: any): Promise<void> {
    // this.loadingService.showAsyncLoading().then(async (loading: HTMLIonLoadingElement) => {
    const docRef = doc(this.firestore, `${collectionName}/${id}`);
    return updateDoc(docRef, data).then(() => {
      // loading.dismiss();
      // if (!hasCustomMsg) {
      //   this.toastService.showToaster('updatedSuccessfully');
      // }
    }).catch((error) => {
      // loading.dismiss();
      // this.handleErrorService.showWarningAlert(error.message);
      // });
    });
  }

  getUserFavorite(userId: string): Observable<Array<IFavorite>> {
    const documentQuery = query(this.getCollection('favorite'), where('userId', '==', userId));
    return collectionData(documentQuery, { idField: 'id' }) as Observable<Array<IFavorite>>;
  }

  private collectionData<T = DocumentData>(query: Query<T>, options?: { idField?: string; }): Observable<T[]> {
    return collectionData(query, options);
  }

  private getCollection(collectionName: string): CollectionReference<DocumentData> {
    return collection(this.firestore, collectionName);
  }
}
