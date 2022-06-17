import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  imgValues: string[] = [
    '../../../../../assets/profile/male-profile.jpg',
    '../../../../../assets/profile/female-profile.jpg',
  ];
  image: string;
  gender: string;

  constructor() {}

  ngOnInit(): void {
    this.gender = 'Male';
    this.image =
      this.gender.toLowerCase() === 'male'
        ? this.imgValues[0]
        : this.imgValues[1];
  }
}
