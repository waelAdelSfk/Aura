import { Component, OnInit } from '@angular/core';
// import { ModalController, NavParams } from '@ionic/angular';
// import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  // currentUser: User;
  // defaultImage = 'assets/images/avatar.png';

  // constructor(public modalController: ModalController, private navParams : NavParams) { }

  ngOnInit(): void {
    // this.currentUser = this.navParams.get('currentUser');
  }

  // close(): void {
  //   this.modalController.dismiss({
  //     dismissed: true
  //   });
  // }
}
