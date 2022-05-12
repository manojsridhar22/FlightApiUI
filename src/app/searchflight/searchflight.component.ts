import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {UsersDataService} from '../services/users-data.service';
import {FormsModule,FormGroup,ReactiveFormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

  users: any = [];
  searchText = "";
  listOfContacts:any ;
  AirlinesName: any;
  p: number = 1;
  constructor(private userData:UsersDataService,private datepipe: DatePipe) { }

  searching:boolean=false;

  ngOnInit(): void {
    this.Flights();
  }
  
  Flights() {
    this.searching=true;
    this.userData.getFlights().subscribe(data => {
      this.users=data;
    })
    console.warn();
  }

  SearchFlights(data:any){
    this.users=[];
    this.searching=true;
    // if(data.fromdate.month<10){
    //   data.fromdate.month='0'+data.fromdate.month;
    // }
    // if(data.fromdate.day<10){
    //   data.fromdate.day='0'+data.fromdate.day;
    // }
    // if(data.todate.month<10){
    //   data.todate.month='0'+data.todate.month;
    // }
    // if(data.todate.day<10){
    //   data.todate.day='0'+data.todate.day;
    // }
    
    // let fromdate=data.fromdate.year+"-"+data.fromdate.month+"-"+data.fromdate.day;
    // let todate=data.todate.year+"-"+data.todate.month+"-"+data.todate.day;

    this.userData.searchFlights(data.fromplace,data.toplace,data.fromdate,data.todate).subscribe(data => {
      this.users=data;
      console.log(this.users);
    })
  }
  key: string = "id";
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  assignUsers(data:any){
    this.users.push(data);
    console.log(this.users);
  }
}
