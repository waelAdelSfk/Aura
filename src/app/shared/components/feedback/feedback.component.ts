import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserFeedback } from '../../models/company';
// import { UserService } from '../../services/user.service';
// import { UtilityService } from '../../services/utility.service';
// import { Plugins } from '@capacitor/core';
// import { PopoverController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';
// const { Storage } = Plugins;

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {


  // submitted = false;
  // serverErrorMessage!: string;
  // feedbackForm!: FormGroup;
  // private userId!: string;


  // get email() {
  //   return this.feedbackForm.get('email');
  // }

  // get description() {
  //   return this.feedbackForm.get('description');
  // }

  // constructor(
  //   private formbuilder: FormBuilder,
  //   private utilityService: UtilityService,
  //   private userService: UserService,
  //   public popoverController: PopoverController,
  //   private translateService: TranslateService
  // ) { }

  ngOnInit(): void {
  //   this.ionViewWillEnter();
  }
  
  // ionViewWillEnter(): void {
  //   this.initFeedbackForm();
  //   this.getCurrentUser();
  // }

  // close(): void {
  //   this.popoverController.dismiss();
  // }

  // private initFeedbackForm(): void {
  //   this.feedbackForm = this.formbuilder.group({
  //     description: ['', Validators.required],
  //     email:  ['', [Validators.required, Validators.email]]
  //   });
  // }

  // async save(): Promise<void>  {
  //   if (this.feedbackForm.valid) {
  //     this.utilityService.showLoading().then((loading: any) => {
  //      const formValue: UserFeedback = this.feedbackForm.value;
  //      formValue.userId = this.userId;
  //      this.userService.addFeedback(formValue).then(data => {
  //       this.utilityService.showServerMessage(this.translateService.instant('sendSuccessfully'), 'success');
  //        this.close();
  //       loading.dismiss();
  //      }).catch((error) => {
  //          loading.dismiss();
  //           this.utilityService.showServerMessage(error.message, 'danger');
  //        });
  //      });
  //    } else {
  //      this.utilityService.showWrongDataAlert();
  //    }
  //  }

  //  private async getCurrentUser() {
  //   // const usrId  = await Storage.get({ key: 'userId' });
  //   // if (usrId.value) {
  //   //   this.userId = usrId.value;
  //   // }
  // }
}
