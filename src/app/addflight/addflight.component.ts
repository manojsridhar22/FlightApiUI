import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor(private userData: UsersDataService, private route: Router) { }

  myform: any;
  flightName: any;
  fromPlace: any;
  toPlace: any;
  onewayPrice: any;
  roundTripPrice: any;
  fromdate: any;
  todate: any;

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.flightName = new FormControl('', [Validators.required]);
    this.fromPlace = new FormControl('', [Validators.required]);
    this.toPlace = new FormControl('', [Validators.required]);
    this.onewayPrice = new FormControl('', [Validators.required]);
    this.roundTripPrice = new FormControl('', [Validators.required]);
    this.fromdate = new FormControl('', [Validators.required]);
    this.todate = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.myform = new FormGroup({
      flightName: this.flightName,
      fromPlace: this.fromPlace,
      toPlace: this.toPlace,
      onewayPrice: this.onewayPrice,
      roundTripPrice: this.roundTripPrice,
      fromdate: this.fromdate,
      todate: this.todate,
    })
  }
  AddedFlights(data: any) {
    this.userData.saveFlight(data).subscribe(result=>{
      alert("Flights Added Successfully")
      this.route.navigate(['/flights']);
    })
  }

}
