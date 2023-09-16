import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {

  selectedValue!: string;

  constructor(
    private modalController: ModalController,
    // private announceChangeService: AnnounceChangeService
    ) { }

  ngOnInit(): void {
    // this.announceChangeService.announceFilterChanged.subscribe(res => {
    //   this.selectedValue = res;
    // });
  }

  ngOnDestroy(): void {
  }

  async close(): Promise<any> {
    await this.modalController.dismiss();
  }


  filter(): void {
    // this.announceChangeService.updateFilter(this.selectedValue);
    this.close();
    if (this.selectedValue === 'nearToMe') {
      this.selectedValue = '';
    }
  }

  reset(): void {
    this.selectedValue = '';
    // this.announceChangeService.updateFilter(this.selectedValue);
    this.close();
  }
}
