import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
  styleUrls: ['./addairline.component.css']
})
export class AddairlineComponent implements OnInit {

  constructor(private userData: UsersDataService, private route: Router) { }

  myform: any;
  flightNumber: any;
  airlineName: any;
  fromPlace: any;
  toPlace: any;
  startDate: any;
  endDate: any;
  scheduledDays: any;
  specificDays: any;
  instrumentUsed: any;
  businessClassSeats: any;
  nonBusinessClassSeats: any;
  price: any;
  rows: any;
  mealType: any;
  blocked: any;

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.flightNumber = new FormControl('', [Validators.required]);
    this.airlineName = new FormControl('', [Validators.required]);
    this.fromPlace = new FormControl('', [Validators.required]);
    this.toPlace = new FormControl('', [Validators.required]);
    this.startDate = new FormControl('', [Validators.required]);
    this.endDate = new FormControl('', [Validators.required]);
    this.scheduledDays = new FormControl('', [Validators.required]);
    this.specificDays = new FormControl('', [Validators.required]);
    this.instrumentUsed = new FormControl('', [Validators.required]);
    this.businessClassSeats = new FormControl('', [Validators.required]);
    this.nonBusinessClassSeats = new FormControl('', [Validators.required]);
    this.price = new FormControl('', [Validators.required]);
    this.rows = new FormControl('', [Validators.required]);
    this.mealType = new FormControl('', [Validators.required]);
    this.blocked = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.myform = new FormGroup({
      flightNumber: this.flightNumber,
      airlineName: this.airlineName,
      fromPlace: this.fromPlace,
      toPlace: this.toPlace,
      startDate: this.startDate,
      endDate: this.endDate,
      scheduledDays: this.scheduledDays,
      specificDays:this.specificDays,
      instrumentUsed: this.instrumentUsed,
      businessClassSeats: this.businessClassSeats,
      nonBusinessClassSeats: this.nonBusinessClassSeats,
      price:this.price,
      rows: this.rows,
      mealType: this.mealType,
      blocked:this.blocked,
    })
  }
  AddAirlines(data: any) {
    this.userData.saveAirline(data).subscribe(result => {
      alert("Schedules Added Successfully")
      this.route.navigate(['/airlines']);
    });
  }
}
