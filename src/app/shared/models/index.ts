import { FieldPath, Timestamp, WhereFilterOp } from '@angular/fire/firestore';

import { AccountStatus, NotificationType, Role } from '@app/enums';

export interface ICollectionData {
    collectionName: string; 
    fieldPath: string | FieldPath;
    opStr: WhereFilterOp; 
    value: unknown; 
    idField: string;
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
