import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})

export class UpdateflightComponent implements OnInit {

  Airlines: any = [];
  AirlineName: any;
  updateFlight = new FormGroup({
    airlineName: new FormControl(''),
    fromPlace: new FormControl(''),
    toPlace: new FormControl(''),
    onewayPrice: new FormControl(''),
    roundTripPrice: new FormControl(''),
    dateAndTime: new FormControl('')
  })
  constructor(private userData: UsersDataService, private router: ActivatedRoute, private route: Router) { }

  myform: any;
  id:any;
  flightName: any;
  fromPlace: any;
  toPlace: any;
  onewayPrice: any;
  roundTripPrice: any;
  fromdate: any;
  todate: any;

  ngOnInit(): void {
    this.Update(this.router.snapshot.params['id']);
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.id = new FormControl('', [Validators.required]);
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
      id: this.id,
      flightName: this.flightName,
      fromPlace: this.fromPlace,
      toPlace: this.toPlace,
      onewayPrice: this.onewayPrice,
      roundTripPrice: this.roundTripPrice,
      fromdate: this.fromdate,
      todate: this.todate,
    })
  }
  Update(id: number) {
    this.userData.getFlightsById(id).subscribe(result => {
      this.Airlines = result;
    });
  }
  UpdatedFlights(data: any) {
    this.userData.updateFlight(data, this.router.snapshot.params['id']).subscribe(result => {
      alert("Flights Updated Successfully!")
      this.route.navigate(['/flights']);
    });
  }
}
