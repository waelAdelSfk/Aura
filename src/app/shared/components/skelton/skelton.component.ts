import { Component, Input } from '@angular/core';

@Component({
  selector: 'w-skelton',
  templateUrl: './skelton.component.html',
  styleUrls: ['./skelton.component.scss'],
})
export class SkeltonComponent {

  @Input() showAvatar = false;
  data: Array<number> = [];

  constructor() {
    this.data.length = 5;
  }

}
