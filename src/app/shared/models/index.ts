import { FieldPath, Timestamp, WhereFilterOp } from '@angular/fire/firestore';

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
    email: string;
    location: string;
    phoneNumber: number;
    rating: Array<{ userId: string; stars: number; }>;
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
    // myStars?: number[];
    stars?: number;
    date?: any;
    comment?: string;
}

export interface IFavorite {
    id: string;
    userId: string;
    itemId: string;
}

// export interface IUserRate extends IUserBase {
//     id: string;
//     companyId: string;
//     userId: string;
//     rate: number;
//     date: Date;
// }

// export interface IUserReview extends IUserBase {
//     id: string;
//     companyId: string;
//     userId: string;
//     review: string;
//     date: Date;
// }

// export interface ICompany {
//     id: string;
//     name: string;
//     image: string;
//     description: string;
//     latitude: number;
//     longitude: number;
//     managerId: string;
//     reviews: IUserReview[];
//     email: string;
//     mobile: number;
//     category: string;
//     website: string;
//     startTime: string;
//     endTime: string;
//     address: string;
//     workDays: string;
//     menuImage: string;
//     rate: number;
//     status: CompanyStatus;
// }



// export interface UserLike {
//     userId?: string;
//     companyId: string;
//     id?: string;
// }

// export interface UserFeedback {
//     userId?: string;
//     description: string;
//     enail: string;
//     id?: string;
// }

// export interface UserLikeDto {
//     data: UserLike;
//     id: string;
// }

// export interface UserSave {
//     userId?: string;
//     companyId: string;
//     id?: string;
// }

// export interface UserSavedDto {
//     data: UserSave;
//     id: string;
// }


// export interface Offer {
//     id?: string;
//     userId: string;
//     companyId: string;
//     englishOfferText: string;
//     arabicOfferText: string;
// }

// export interface OfferViewModel {
//     data: Offer;
//     id: string;
// }

// export interface ExtraViewModel {
//     data: ExtraImage;
//     id: string;
// }

// export interface ExtraImage {
//     companyId: string;
//     id?: string;
//     image: string;
// }

// export interface ExtraImagesViewModel {
//     image: string;
//     isUploaded?: boolean;
//     index?: number;
//     showText?: boolean;
//     showSpinner?: boolean;
//     id?: string;
// }
