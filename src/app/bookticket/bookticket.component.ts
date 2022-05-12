import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {

  constructor(private userData: UsersDataService, private router: ActivatedRoute, private route: Router) { }
  Flights: any = [];
  myform: any;
  name: any;
  emailid: any;
  numberofseats: any;
  passengers: any;
  mealtype: any;
  fromplace: any;
  toplace: any;
  fromdate: any;
  todate: any;
  airlinename: any;
  onewayprice: any;
  roundtripprice: any;

  ngOnInit(): void {
    this.GetFlightsInfo(this.router.snapshot.params['id']);
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', [Validators.required]);
    this.emailid = new FormControl('', [Validators.required]);
    this.numberofseats = new FormControl('', [Validators.required]);
    this.passengers = new FormControl('', [Validators.required]);
    this.mealtype = new FormControl('', [Validators.required]);
    this.fromplace = new FormControl('', [Validators.required]);
    this.toplace = new FormControl('', [Validators.required]);
    this.fromdate = new FormControl('', [Validators.required]);
    this.todate = new FormControl('', [Validators.required]);
    this.airlinename = new FormControl('', [Validators.required]);
    this.onewayprice = new FormControl('', [Validators.required]);
    this.roundtripprice = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.myform = new FormGroup({
      name: this.name,
      emailid: this.emailid,
      numberofseats: this.numberofseats,
      passengers: this.passengers,
      mealtype: this.mealtype,
      fromplace: this.fromplace,
      toplace: this.toplace,
      fromdate: this.fromdate,
      todate: this.todate,
      airlinename: this.airlinename,
      onewayprice: this.onewayprice,
      roundtripprice: this.roundtripprice,
    })
  }
  
  GetFlightsInfo(id: number) {
    this.userData.getFlightsById(id).subscribe(result => {
      this.Flights = result;
    })
  }
  BookTickets(data: any) {
    let max = 1000000;
    let date = new Date();
    var curr_date = date.getDate();
    let tdate = curr_date > 9 ? curr_date : "0" + curr_date;
    var curr_month = date.getMonth();
    let tmonth = curr_month > 9 ? curr_month : "0" + curr_month;
   
    let bookedticket = {
      
      BookingDate: date.getFullYear() + "-" + tmonth + "-" + tdate,
      AirlineName: data.airlinename,
      SeatsBooked: data.numberofseats,
      OnewayPrice: data.onewayprice,
      RoundTripPrice: data.roundtripprice,
      PNR: (Math.floor(Math.random() * max) + 1).toString(),
      Status: "Booked"
    }
    this.userData.saveTicket(data).subscribe(result => {
      alert("Ticket Booked Successfully!")
      this.route.navigate(['/searchflight']);
      this.BookTicketHistory(bookedticket);
    });
  }
  BookTicketHistory(data: any) {
    this.userData.saveTicketHistory(data).subscribe(result => { 
      console.log(result);
    });
  }
}
