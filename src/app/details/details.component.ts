import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { RatingComponent } from "../rating/rating.component";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [SharedModule, RatingComponent]
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
