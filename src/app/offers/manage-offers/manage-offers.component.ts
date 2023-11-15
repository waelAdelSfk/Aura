import { Component, Input, OnInit } from '@angular/core';
import { DocumentReference, Timestamp } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
// import { DateAdapter } from '@angular/material/core';
import { OfferStatus, subscriptionStatus } from '@app/enums';
import { ICategory, INotification, IOffers, IUser } from '@app/models';
import { DataService, FireStoreService, ModalService } from '@app/services';
import { CommonUtility } from '@app/utilities';
import { ControlsModule } from 'app/controls/controls.module';
import { SharedModule } from 'app/shared/shared.module';
import { map } from 'rxjs';

@Component({
  standalone: true,
  imports: [SharedModule, ControlsModule],
  selector: 'app-manage-offers',
  templateUrl: './manage-offers.component.html',
  styleUrls: ['./manage-offers.component.scss'],

})
export class ManageOffersComponent extends CommonUtility implements OnInit {


  manageForm: FormGroup;
  @Input() item: IOffers;

  subscriberList: Array<IUser> = [];
  subStatus = subscriptionStatus;
  offerStatus = OfferStatus;
  // categories: Observable<ICategory[]>;
  categories: Array<ICategory>;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private dataService: DataService,
    private fireStoreService: FireStoreService,
  ) { super(); }

  ngOnInit(): void {
    this.initFormModel();
    if (this.item) {
      this.patchFormModel();
    }
    this.getAllCategories();
  }

  onImageChanged(img: string): void {
    if (img) {
      this.manageForm.patchValue({
        image: img
      });
    }
  }


  save(event: Event, manageFormRef: FormGroupDirective): void {
    manageFormRef.onSubmit(event);
    this.manageForm.markAllAsTouched();
    if (this.manageForm.valid) {
      const formValue = this.manageForm.value;
      const dataValue = { ...formValue, shopOwnerId: this.userId, offerStatus: OfferStatus.approved }
      if (this.item) {
        this.dataService.update(`offersList/${this.item.id}`, formValue);
        this.close();
      } else {
        this.fireStoreService.addDoc('offersList', dataValue).subscribe((docRef: DocumentReference) => {
          const offerId = docRef.id;
          // if (this.item.offerStatus === OfferStatus.approved) {
          // }
          this.sendNotification(offerId);
          this.close();
        });
      }
    }
  }


  sendNotification(offerId: string): void {
    this.fireStoreService.getAll<IUser>('users').pipe(
      map((users: IUser[]) => users.find(user => user.id === this.userId))
    )
      .subscribe((user: IUser) => {
        if (user && user.subscriberList) {
          const subscribers = user.subscriberList;
          for (const subscriber of subscribers) {
            if (subscriber.subStatus === this.subStatus.subscribe) {
              const notificationData: Partial<INotification> = {
                userId: subscriber.userId, // Use subscriber's userId
                shopOwnerId: this.userId,
                date: Timestamp.fromDate(new Date()),
                content: 'You Have New Offer',
                isUserRemoved: false,
                isUserSeen: false,
                offerId: offerId,
              };
              this.dataService.add('notification', notificationData);
              // this.toastService.showToaster('notificationSentSuccessfully');
            }
          }
        }
      });
  }





  close(): void {
    this.modalService.dismiss();
  }

  private initFormModel(): void {
    this.manageForm = this.formBuilder.group({
      title: [null, Validators.required],
      image: [null, Validators.required],
      site: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      categoryId: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      location: [null, Validators.required],
      shortDescription: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  private patchFormModel(): void {
    this.manageForm.patchValue({
      title: this.item.title,
      image: this.item.image,
      site: this.item.site,
      phoneNumber: this.item.phoneNumber,
      startDate: new Date(this.item.startDate.seconds * 1000),
      endDate: new Date(this.item.endDate.seconds * 1000),
      shortDescription: this.item.shortDescription,
      description: this.item.description,
      location: this.item.location,
      categoryId: this.item.categoryId,
    });
  }

  private getAllCategories(): void {
    this.fireStoreService.getAll<ICategory>('categories').subscribe(res => {
      this.categories = res
    });
  }

  // handleChange(ev) {
  //   console.log('Current value:', JSON.stringify(ev.target.value));
  // }

  // private getAllCategories(): void {
  //   this.firebaseService.getAll(Constants.FirebaseCollection.monthsGrowth).subscribe(monthsGrowth => {
  //     this.Categories = monthsGrowth.sort(
  //       (a, b) => a.number - b.number
  //     );
  //   });
  // }
}
