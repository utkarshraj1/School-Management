import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profileMenuVisibility: boolean;
  avatarImgs: string[];
  gender: string = 'Male';
  userDetails: any;

  constructor() { }

  ngOnInit(): void {
    this.profileMenuVisibility = false;
    this.userDetails = JSON.parse(localStorage.getItem('student_info') || '');

    if (this.gender === 'Male') {
      this.avatarImgs = ["maletype1.png", "maletype2.png"].map(img => `../../../../assets/avatars/${img}`);
    } else {
      this.avatarImgs = ["femaletype1.png", "femaletype2.png"].map(img => `../../../../assets/avatars/${img}`);
    }
  }

  /**
   * changes the avatar based on user's selection, returns void
   * @param avatar - avatar image 
   */
  selectAvatar(avatar: string): void {
    let flag = this.avatarImgs[0];
    let avatarIndex = this.avatarImgs.indexOf(avatar);
    this.avatarImgs[0] = this.avatarImgs[avatarIndex];
    this.avatarImgs[avatarIndex] = flag;
  }

}
