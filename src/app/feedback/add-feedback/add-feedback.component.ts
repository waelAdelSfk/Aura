import { Component, Input, OnInit } from '@angular/core';
import { DocumentReference, Timestamp } from '@angular/fire/firestore';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { IReport } from '@app/models';
import { FireStoreService, ModalService, ToastService } from '@app/services';
import { CommonUtility } from '@app/utilities';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class AddFeedbackComponent extends CommonUtility implements OnInit {

  reportForm: UntypedFormGroup;

  // private userId: string;
  // @ViewChild('modal') modal: ModalHeaderComponent;
  @Input() messageId: string;
  @Input() itemId: string;
  @Input() shopOwner: string;
  @Input() userName: string;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private fireStoreService: FireStoreService,
    private toastService: ToastService,
    private modalService: ModalService,
    // private userService: UserService
  ) { super(); }

  ngOnInit(): void {
    // this.getCurrentUserId();
    this.initFormModels();
  }

  get userDocumentRef(): DocumentReference {
    return this.fireStoreService.getDocumentRef(`/${'users'}/${this.userId}`);
  }

  close(): void {
    this.modalService.dismiss();
  }


  send(): void {
    if (this.reportForm.valid) {
      const data: Partial<IReport> = {
        date: Timestamp.fromDate(new Date()),
        userRef: this.userDocumentRef,
        itemId: this.itemId,
        shopOwnerId: this.shopOwner,
        // userName: this.userName,
        userId: this.userId,
        isAdminSeen: false,
        isAdminRemoved: false,
        isBrandOwnerRemoved: false,
        isBrandOwnerSeen: false,
        message: this.reportForm.value.message
      };
      this.fireStoreService.addDoc('feedback', data).subscribe(() => {
        this.toastService.showToaster('feedbackSendSuccessfully');
        this.close();
      });
    }
  }

  // private getCurrentUserId(): void {
  //   this.userService.getCurrentLoggedInUser().subscribe(res => {
  //     if (res && res.uid) {
  //       this.userId = res.uid;
  //     }
  //   });
  // }

  private initFormModels(): void {
    this.reportForm = this.formBuilder.group({
      message: [null, Validators.required]
    });
  }

}
