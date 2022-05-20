import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CardComponent implements OnInit {

  images: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.images = ['carousalimg1', 'carousalimg2'].map((n) => `../../../../../assets/carousals/${n}.png`);
  }

}
