import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateairline',
  templateUrl: './updateairline.component.html',
  styleUrls: ['./updateairline.component.css']
})
export class UpdateairlineComponent implements OnInit {
  
  constructor(private userData: UsersDataService, private router: ActivatedRoute, private route: Router) { }

  myform: any;
  id:any;
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
  Airlines:any=[];

  ngOnInit(): void {
    this.Update(this.router.snapshot.params['id']);
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.id = new FormControl('', [Validators.required]);
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
      id: this.id,
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
  Update(id: number) {
    this.userData.getAirlinesById(id).subscribe(result => {
      this.Airlines = result;
    });
  }
  UpdatedAirlines(data: any) {
    this.userData.updateAirline(data, this.router.snapshot.params['id']).subscribe(result => {
      alert("Airlines Updated Successfully!")
      this.route.navigate(['/airlines']);
    });
  }

}
