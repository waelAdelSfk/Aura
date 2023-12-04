import { DocumentReference, FieldPath, Timestamp, WhereFilterOp } from '@angular/fire/firestore';

import { AccountStatus, NotificationType, Role, OfferStatus } from '@app/enums';

export interface ICollectionData {
    collectionName: string;
    fieldPath: string | FieldPath;
    opStr: WhereFilterOp;
    value: unknown;
    idField: string;
}

export interface IManage {
    id: string;
    name: string;
}

export interface IUserBase {
    name: string;
    image: string;
}

export interface IUser extends IUserBase {
    id: string;
    email: string;
    role: Role;
    status: AccountStatus;
    creationDate: Timestamp;
    subscriberList: Array<{ userId: string; subStatus: number }>;
}

export interface ICategory {
    id: string;
    name: string;
    image: string;
}


export interface IMenu {
    labelKey: string;
    url: string;
    visibility?: Array<Role>;
    icon?: string;
    count?: number;
    htmlIcon?: string;
}


export interface INotification {
    id: string;
    offerId: string;
    shopOwnerId: string;
    userId: string;
    title: string;
    content: string;
    date: Timestamp;
    isAdminSeen: boolean;
    isUserSeen: boolean;
    isAdminRemoved: boolean;
    isUserRemoved: boolean;
    notificationType: NotificationType;
}

export interface INotificationViewModel extends INotification {
    userName: string;
    email: string;
    image: string;
    cssClass: string;
}

export interface IOffers {
    id: string;
    image: string;
    title: string;
    startDate: Timestamp;
    endDate: Timestamp;
    description: string;
    shortDescription: string;
    shopOwnerId: string;
    offerStatus: OfferStatus,
    categoryId: string;
    promoCode: string;
    discount: number;
    site: string;
    location: string;
    phoneNumber: number;
    rating: Array<{ userId: string; stars: number; }>;
    viewCount: number;
}

export interface IRestaurant {
    id: string;
    name: string;
    image: string;
    email: string;
    phoneNumber: string;
    location: string;
    openingTimes: string;
    // mainMenu: string;
    // kidsMenu: string;
    // breakfastMenu: string;
}

export interface IRate {
    id?: string;
    userId?: string;
    itemId?: string;
    shopOwner?: string;
    value?: number;
    stars?: number;
    date?: any;
    comment?: string;
}

export interface IFavorite {
    id: string;
    userId: string;
    itemId: string;
}

export interface IReport {
    id?: string;
    userId?: string;
    itemId?: string;
    shopOwnerId?: string;
    date?: any;
    message?: string;
    userName?: string;
    isAdminSeen: boolean;
    isAdminRemoved: boolean;
    isBrandOwnerSeen: boolean;
    isBrandOwnerRemoved: boolean;
    userRef?: DocumentReference;
}
