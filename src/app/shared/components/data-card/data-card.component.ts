import { Component, Input, OnInit } from '@angular/core';
import { IDataCardDetails } from 'src/app/shared/models/dataCardDetails';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss'],
})
export class DataCardComponent implements OnInit {
  @Input('data') cardData: IDataCardDetails;
  uiCardData: IDataCardDetails;

  constructor() {}

  ngOnInit(): void {
    this.uiCardData = this.cardData;
  }
}
