import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pre-trip-inspection',
  templateUrl: './pre-trip-inspection.component.html',
  styleUrls: ['./pre-trip-inspection.component.css']
})
export class PreTripInspectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  preTrip() {
    this.router.navigate(['driver/preTripInspection']);
  }
  postTrip() {
    this.router.navigate(['driver/postTripInspection']);
  }
}
