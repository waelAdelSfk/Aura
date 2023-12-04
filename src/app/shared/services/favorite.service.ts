import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';

import { IFavorite } from '@app/models';
import { FirebaseError } from 'firebase/app';
import { FireStoreService, ToastService, TranslationService, UsersService } from '@app/services';
import { DocumentReference, PartialWithFieldValue, addDoc, collection, Firestore, CollectionReference, DocumentData, where, collectionData, query } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {

    userIdField: keyof IFavorite = 'userId';
    itemFiledId: keyof IFavorite = 'itemId';
    private userId: string;

    constructor(
        private fireStoreService: FireStoreService,
        private toastService: ToastService,
        private translationService: TranslationService,
        private firestore: Firestore,
        private usersService: UsersService,
        private angularFirestore: AngularFirestore,
    ) {
        this.getCurrentLoggedInUserId();
    }


    private showErrorMessage(errorKey: string): void {
        const message = errorMessages[errorKey] || 'something Went Wrong';
        this.toastService.showToaster(this.translationService.instant(message), 'danger');
    }

    addingDoc<T>(collectionName: string, data: PartialWithFieldValue<any>): Promise<DocumentReference<T>> {
        return addDoc(this.getCollection(collectionName), data);
    }

    create(data: Partial<IFavorite>): Observable<void> {
        return from(this.addingDoc('favorite', data).then(() => {
            this.toastService.showToaster(this.translationService.instant('Added Successfully'));
        }).catch((error: FirebaseError) => {
            this.showErrorMessage(error.code);
        })
        );
    }


    getFavoriteItemById(prodId: string): Observable<IFavorite | null> {
        const documentQuery = query(this.getCollection('favorite'), where(this.userIdField, '==', this.userId), where(this.itemFiledId, '==', prodId));
        return collectionData(documentQuery, { idField: 'id' }).pipe(
            map(favorites => (favorites.length > 0 ? favorites[0] : null))
        ) as Observable<IFavorite | null>;
    }


    getItemsCount(): Observable<number> {
        return this.fireStoreService
            .collection('favorite', (ref) =>
                ref.where(this.userIdField, '==', this.userId)
            )
            .valueChanges()
            .pipe(
                map((res) => res as IFavorite[]),
                map((res: IFavorite[]) => res.length)
            );
    }

    delete(path: string): Promise<void> {
        return this.angularFirestore.doc(path).delete();
    }

    remove(id: string): Observable<void> {
        return from(this.delete(`${'favorite'}/${id}`).then(() => {
            this.toastService.showToaster(this.translationService.instant('Removed Successfully'));
        }).catch((error: FirebaseError) => {
            this.showErrorMessage(error.code);
        }));
    }

    private getCurrentLoggedInUserId(): void {
        this.usersService.getCurrentLoggedInUser().subscribe(res => {
            if (res && res.uid) {
                this.userId = res.uid;
            }
        });
    }

    private getCollection(collectionName: string): CollectionReference<DocumentData> {
        return collection(this.firestore, collectionName);
    }

}

export const errorMessages: { [key: string]: string } = {
    'somethingWentWrong': 'somethingWentWrong'
};
