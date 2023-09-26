import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-wael',
  templateUrl: './wael.component.html',
  styleUrls: ['./wael.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class WaelComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  // save(event: Event, manageFormRef: FormGroupDirective): void {
  //   manageFormRef.onSubmit(event);
  //   this.manageForm.markAllAsTouched();
  //   if (this.manageForm.valid) {
  //     const formValue = this.manageForm.value;
  //     // const offerId = formValue.id;
  //     const dataValue = { ...formValue, shopOwnerId: this.userId }
  //     if (this.item) {
  //       this.dataService.update(`offersList/${this.item.id}`, formValue);
  //     } else {
  //       // const offerId = formValue.id;
  //       // console.log('offer id', offerId)
  //       this.dataService.add('offersList', dataValue)
  //       // .subscribe((docRef: DocumentReference) => {
  //       //   console.log('Document written with ID: ', docRef.id);
  //       //   // docRef.id contains the unique document ID
  //       // },
  //       // (error) => {
  //       //   console.error('Error adding document: ', error);
  //       // });
  //       // .then((docRef) => {
  //       //   console.log('Document written with ID: ', docRef.id);
  //       //   // docRef.id contains the unique document ID
  //       // })
  //       // this.sendNotification();
  //       this.sendNotification(formValue.id);
  //       // this.fireStoreService.getAll<IUser>('users').pipe(
  //       //   map((users: IUser[]) => users.find(user => user.id === this.userId))
  //       // )
  //       //   .subscribe((user: IUser) => {
  //       //     if (user && user.subscriberList) {
  //       //       const subscribers = user.subscriberList;
  //       //       for (const subscriber of subscribers) {
  //       //         if (subscriber.subStatus === this.subStatus.subscribe) {
  //       //           const notificationData: Partial<INotification> = {
  //       //             userId: subscriber.userId, // Use subscriber's userId
  //       //             shopOwnerId: this.userId,
  //       //             date: Timestamp.fromDate(new Date()),
  //       //             content: 'newOffer',
  //       //             isUserRemoved: false,
  //       //             isUserSeen: false,
  //       //             // offerId: offerId,
  //       //           };
  //       //           this.dataService.add('notification', notificationData);
  //       //           // this.toastService.showToaster('notificationSentSuccessfully');
  //       //         }
  //       //       }
  //       //     }
  //       //   });
  //     }
  //     this.close();
  //   }
  // }


  // save(event: Event, manageFormRef: FormGroupDirective): void {
  //   manageFormRef.onSubmit(event);
  //   this.manageForm.markAllAsTouched();
  //   if (this.manageForm.valid) {
  //     const formValue = this.manageForm.value;
  //     const dataValue = { ...formValue, shopOwnerId: this.userId }
  //     if (this.item) {
  //       this.dataService.update(`offersList/${this.item.id}`, formValue);
  //     } else {
  //       this.dataService.add('offersList', dataValue);
  //       this.sendNotification(formValue.id);
  //     }
  //     this.close();
  //   }
  // }

  // save(event: Event, manageFormRef: FormGroupDirective): void {
  //   manageFormRef.onSubmit(event);
  //   this.manageForm.markAllAsTouched();
  //   if (this.manageForm.valid) {
  //     const formValue = this.manageForm.value;
  //     if (this.item) {
  //       this.dataService.update(`offersList/${this.item.id}`, formValue);
  //     } else {
  //       this.dataService.add('offersList', formValue);
  //     }
  //     this.close();
  //   }
  // }


  // save(event: Event, manageFormRef: FormGroupDirective): void {
  //   manageFormRef.onSubmit(event);
  //   this.manageForm.markAllAsTouched();
  //   if (this.manageForm.valid) {
  //     const formValue = this.manageForm.value;
  //     const offerId = formValue.id;
  //     if (this.item) {
  //       this.dataService.update(`offersList/${this.item.id}`, formValue);
  //     } else {
  //       this.dataService.add('offersList', { ...formValue, shopOwnerId: this.userId, id: offerId });
  //       this.fireStoreService.getAll<IUser>('users').pipe(
  //         map((users: IUser[]) => users.find(user => user.id === this.userId))
  //       )
  //         .subscribe((user: IUser) => {
  //           if (user && user.subscriberList) {
  //             const subscribers = user.subscriberList;
  //             for (const subscriber of subscribers) {
  //               if (subscriber.subStatus === this.subStatus.subscribe) {
  //                 const notificationData: Partial<INotification> = {
  //                   userId: subscriber.userId, // Use subscriber's userId
  //                   shopOwnerId: this.userId,
  //                   date: Timestamp.fromDate(new Date()),
  //                   content: 'newOffer',
  //                   isUserRemoved: false,
  //                   isUserSeen: false,
  //                   offerId: offerId, // Set the offerId here
  //                 };
  //                 this.dataService.add('notification', notificationData);
  //                 // this.toastService.showToaster('notificationSentSuccessfully');
  //               }
  //             }
  //           }
  //         });
  //     }
  //     this.close();
  //   }
  // }

  // save(event: Event, manageFormRef: FormGroupDirective): void {
  //   manageFormRef.onSubmit(event);
  //   this.manageForm.markAllAsTouched();
  //   if (this.manageForm.valid) {
  //     const offer: Partial<IOffers> = {
  //       ...this.manageForm.value,
  //       shopOwnerId: this.userId,
  //     };
  //     const formValue = this.manageForm.value;
  //     if (this.item) {
  //       this.dataService.update(`offersList/${this.item.id}`, formValue);
  //     } else {
  //       this.dataService.add(`/${'offersList'}${offer} `, formValue);

  //       this.fireStoreService.getAll<IUser>('users').pipe(map((users: IUser[]) =>
  //         users.filter(user => user.id === this.userId))
  //       )
  //         .subscribe((subscribers: IUser[]) => {
  //           this.subscriberList = subscribers.filter(user => user.subscriberList.filter(sub => sub.userId));
  //           for (const subscriber of subscribers) {
  //             if (subscriber) {
  //               console.log('the subscriberList', subscribers)
  //               const content = 'newOffer';
  //               const notificationData: Partial<INotification> = {
  //                 userId: subscribers.userId,
  //                 date: Timestamp.fromDate(new Date()),
  //                 content: content,
  //                 isUserRemoved: false,
  //                 isUserSeen: false,
  //               };
  //               this.dataService.add(`/${'notification'}${notificationData} `, true);
  //               this.toastService.showToaster('notificationsPage.notificationSentSuccessfully');
  //             }
  //           }
  //         });
  //     }
  //     this.close();
  //   }
  // }

  // save(event: Event, manageFormRef: FormGroupDirective): void {
  //   manageFormRef.onSubmit(event);
  //   this.manageForm.markAllAsTouched();

  //   if (this.manageForm.valid) {
  //     const formValue = this.manageForm.value;
  //     const dataValue = { ...formValue, shopOwnerId: this.userId };

  //     if (this.item) {
  //       this.dataService.update(`offersList/${this.item.id}`, formValue);
  //     } else {
  //       // Assuming Firestore will auto-generate the ID
  //       this.dataService.add('offersList', dataValue).then((docRef) => {
  //         // docRef.id contains the auto-generated ID assigned by Firestore
  //         const offerId = docRef.id;

  //         this.fireStoreService.getAll<IUser>('users').pipe(
  //           map((users: IUser[]) => users.find(user => user.id === this.userId))
  //         )
  //           .subscribe((user: IUser) => {
  //             if (user && user.subscriberList) {
  //               const subscribers = user.subscriberList;
  //               for (const subscriber of subscribers) {
  //                 if (subscriber.subStatus === this.subStatus.subscribe) {
  //                   const notificationData: Partial<INotification> = {
  //                     userId: subscriber.userId,
  //                     shopOwnerId: this.userId,
  //                     date: Timestamp.fromDate(new Date()),
  //                     content: 'newOffer',
  //                     isUserRemoved: false,
  //                     isUserSeen: false,
  //                     offerId: offerId, // Use the auto-generated ID
  //                   };
  //                   this.dataService.add('notification', notificationData);
  //                 }
  //               }
  //             }
  //           });
  //       });
  //     }
  //     this.close();
  //   }
  // }


  // unsubscribe(item: IUser): void {
  //   const updatedStatusChange = { userId: this.userId, subStatus: this.subStatus.unSubscribe };
  //   const newUserStatusChanges = item.subscriberList ? [...item.subscriberList, updatedStatusChange] : [updatedStatusChange];
  //   this.dataService.update(`/${'users'}/${item.id}`, { ...item, subscriberList: newUserStatusChanges, })
  //   // this.firebaseService.updateDoc(
  //   //   Constants.FirebaseCollection.vaccinations,
  //   //   item.id,
  //   //   {
  //   //     ...item,
  //   //     subscriberList: newUserStatusChanges,
  //   //   }
  //   // );
  // }

  // unSubscribe(item: IUser): void {
  //   const addUserToSubscribeList = { userId: this.userId, subStatus: this.subStatus.subscribe };
  //   if (item.subscriberList) {
  //     const userStatusIndex = item.subscriberList.findIndex(change => change.userId === this.userId);
  //     if (userStatusIndex !== -1) {
  //       item.subscriberList[userStatusIndex].subStatus = this.subStatus.subscribe;
  //     } else {
  //       item.subscriberList.push(addUserToSubscribeList);
  //     }
  //   } else {
  //     item.subscriberList = [addUserToSubscribeList];
  //   }
  //   // this.dataService.update(`/${'users'}/${item.id}`, { ...item })
  //   if (this.userId === item.subscriberList[0].userId) {
  //     this.dataService.update(`/${'users'}/${item.id}`, {
  //       ...item,
  //       subStatus: this.subStatus.unSubscribe
  //     })
  //   }
  // }

  // subscribe(item: IUser): void {
  //   const addUserToSubscribeList = { userId: this.userId };
  //   if (item.subscriberList) {
  //     const userStatusIndex = item.subscriberList.findIndex(change => change.userId === this.userId);
  //     if (userStatusIndex !== -1) {
  //       item.subscriberList[userStatusIndex];
  //     } else {
  //       item.subscriberList.push(addUserToSubscribeList);
  //     }
  //   } else {
  //     item.subscriberList = [addUserToSubscribeList];
  //     item.subscriberList.push(addUserToSubscribeList);
  //   }
  //   this.dataService.update(`/${this.users, item.id}`,
  //     { ...item, subscriberList: addUserToSubscribeList });
  // }


  // subscribe(item: IUser): void {
  //   const addUserToSubscribeList = { userId: this.userId, subStatus: this.subStatus.subscribe };
  //   if (item.subscriberList) {
  //     const userStatusIndex = item.subscriberList.findIndex(change => change.userId === this.userId);
  //     if (userStatusIndex !== -1) {
  //       item.subscriberList[userStatusIndex].subStatus = this.subStatus.subscribe;
  //     } else {
  //       item.subscriberList.push(addUserToSubscribeList);
  //     }
  //   }
  //   // else {
  //   //   item.subscriberList = [addUserToSubscribeList];
  //   // }
  //   this.dataService.update(`/${'users'}/${item.id}`, { ...item })
  //   this.toastService.showToaster('subscribe');
  //   // `/${this.users}/${item.id}`, { ...item }
  //   // .then(() => {
  //   //   // Handle success
  //   //   // You can show a toast or perform any other actions here.
  //   // })
  //   // .catch(error => {
  //   //   // Handle error
  //   //   // You can show an error message or perform any other actions here.
  //   // });
  // }

  // unsubscribe(item: IUser): void {
  //   const userStatusIndex = item.subscriberList.findIndex(change => change.userId === this.userId);
  //   if (userStatusIndex !== -1) {
  //     if (item.subscriberList[userStatusIndex].subStatus === this.subStatus.subscribe) {
  //       item.subscriberList[userStatusIndex].subStatus = this.subStatus.unSubscribe;
  //     }
  //     // else {
  //     //   item.subscriberList[userStatusIndex].subStatus = this.subStatus.subscribe;
  //     // }

  //     this.dataService.update(`/${'users'}/${item.id}`, { ...item });
  //   }
  //   // .then(() => {
  //   //   // Handle success
  //   //   // You can show a toast or perform any other actions here.
  //   // })
  // }

}
