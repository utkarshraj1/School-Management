import { Component, Input, OnInit } from '@angular/core';
import { ISideNavRouteDetails } from '../../models/sideNavRouteDetails.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Input('sidenav') sideNavRouteDetails: ISideNavRouteDetails[];

  routeDetails: ISideNavRouteDetails[];

  constructor() {}

  ngOnInit(): void {
    // console.log(this.sideNavRouteDetails);
    this.routeDetails = this.sideNavRouteDetails;
  }
}
