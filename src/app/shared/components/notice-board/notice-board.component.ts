import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss']
})
export class NoticeBoardComponent implements OnInit {

  subject: string;
  message: string;
  signatory: string;

  constructor() { }

  ngOnInit(): void {
    this.message = `This is to bring to your notice that mobile phones aren't allowed in school premises. Thus students are asked not to bring mobile phones in school. Strict action will be taken against those who doesn't follow the rules.`
    this.subject = `Prohibition of mobile phones`;
    this.signatory = 'Principal';
  }

}
