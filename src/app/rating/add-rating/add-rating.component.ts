import { Component, Input, OnInit } from '@angular/core';
import { IRate } from '@app/models';
import { DataService, ModalService } from '@app/services';
import { CommonUtility } from '@app/utilities';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class AddRatingComponent extends CommonUtility implements OnInit {

  @Input() itemId: string;

  myStars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  message: string;

  isFormValid: boolean = false;

  constructor(
    private modalService: ModalService,
    private dataService: DataService,
  ) { super(); }

  ngOnInit(): void {
    // this.getCurrentUserId();
    // this.myStars = myStars;
  }

  checkFormValidity() {
    this.isFormValid = this.selectedValue > 0;
  }


  countStar(star: any) {
    this.selectedValue = star;
    this.checkFormValidity();
  }




  close(): void {
    this.modalService.dismiss();
  }

  rate(): void {
    const data: IRate = {
      stars: this.selectedValue,
      date: new Date(),
      userId: this.userId,
      itemId: this.itemId,
      comment: this.message ? this.message : ''
    };
    this.dataService.add('rating', data);
    this.close();
  }


}
