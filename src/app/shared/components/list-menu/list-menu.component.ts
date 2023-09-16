import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { PopoverController } from '@ionic/angular';

// import { UserLike, UserLikeDto, UserSave, UserSavedDto } from '../../models/company';
// import { UserService } from '../../services/user.service';
// import { UtilityService } from '../../services/utility.service';


@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss'],
})
export class ListMenuComponent implements OnInit {

  // private companyId!: string;
  // private userId!: string;
  // likes: UserLike[] = [];
  // saved: UserSave[] = [];
  // isLiked!: boolean;
  // isSaved!: boolean;
  // currentLike!: UserLike;
  // currentSaved!: UserSave;

  // constructor(
  //   private popoverController: PopoverController,
  //   // private userService: UserService,
  //   // private utilityService: UtilityService,
  //   private router: Router
  //   ) { }

  ngOnInit(): void {
    // this.ionViewWillEnter();
  }


  // ionViewWillEnter(): void {
  //   this.getCurrentUser();
  //   const url = this.router.url;
  //   const lastIndexOfSlash = url.lastIndexOf('/') + 1;
  //   this.companyId = url.slice(lastIndexOfSlash, url.length);
  //   this.getAllLikes();
  //   this.getAllSaved();
  // }
  
  // close(): void {
  //   this.popoverController.dismiss();
  // }

  // async ToggleLike(): Promise<void> {
  //   this.close();
  //   if (this.isLiked) {
  //     this.disLikeItem();
  //   } else {
  //     this.likeItem();
  //   }
  // }

  // async ToggleSave(): Promise<void> {
  //   this.close();
  //   if (this.isSaved) {
  //     this.unSaveItem();
  //   } else {
  //     this.saveItem();
  //   }
  // }

  // async save(): Promise<void> {
  //   this.close();
  //   // this.utilityService.save(this.userId, this.companyId);
  // }

  // private async getCurrentUser() {
  //   // const usrId  = await Storage.get({ key: 'userId' });
  //   // if (usrId.value) {
  //   //   this.userId = usrId.value;
  //   // }
  // }

  // private getAllLikes(): void {
  //   // this.userService.getAllLikes().subscribe((res: UserLikeDto[]) => {
  //   //   this.likes = [];
  //   //   res.map((item: UserLikeDto) => {
  //   //     const like: UserLike = {
  //   //       userId: item.data.userId,
  //   //       companyId: item.data.companyId,
  //   //       id: item.id,
  //   //     };
  //   //     this.likes.push(like);
  //   //   });
  //   //   const isExist = this.likes.find(l => l.companyId === this.companyId && l.userId === this.userId);
  //   //   this.isLiked = isExist ? true : false;
  //   //   if (isExist) {
  //   //     this.currentLike = isExist;
  //   //   }
  //   // });
  // }

  // private disLikeItem() {
  //   // this.utilityService.disLikeItem(this.currentLike.id);
  // }

  // private likeItem(): void {
  //   // this.utilityService.likeItem(this.userId, this.companyId);
  // }

  // private getAllSaved(): void {
  //   // this.userService.getAllSaved().subscribe((res: UserSavedDto[]) => {
  //   //   this.saved = [];
  //   //   res.map((item: UserSavedDto) => {
  //   //     const like: UserSave = {
  //   //       userId: item.data.userId,
  //   //       companyId: item.data.companyId,
  //   //       id: item.id,
  //   //     };
  //   //     this.saved.push(like);
  //   //   });
  //   //   const isExist = this.saved.find(l => l.companyId === this.companyId && l.userId === this.userId);
  //   //   this.isSaved = isExist ? true : false;
  //   //   if (isExist) {
  //   //     this.currentSaved = isExist;
  //   //   }
  //   // });
  // }

  // private saveItem(): void {
  //   // this.utilityService.saveItem(this.userId, this.companyId);
  // }

  // private unSaveItem(): void {
  //   // this.utilityService.unSaveItem(this.currentSaved.id);
  // }
}
