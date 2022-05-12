import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  users: any = [];
  searchText = "";
  listOfContacts: any;
  flightName: any;
  p: number = 1;
  constructor(private userData: UsersDataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.Flights();
  }

  Flights() {
    this.userData.getFlights().subscribe(data => {
      this.users = data;
    })
    console.warn();
  }
  DeleteFlights(id: number) {
    this.userData.deleteFlight(id).subscribe(data => {
      this.Flights();
    });
  }
  UpdateFlights(data: any) {
    this.userData.updateFlight(data, data.id).subscribe(result=>{
      this.Flights();
    })
  }
  Search() {
    if (this.flightName == "") {
      this.ngOnInit();
    } else {
      this.users = this.users.filter((res: any) => {
        return res.flightName.toLocaleLowerCase().match(this.flightName.toLocaleLowerCase());
      })

    }
  }
  key: string = "id";
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
