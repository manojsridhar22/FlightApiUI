import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {
  airlines: any = [];
  airlineName: any;
  p: number = 1;
  constructor(private userData: UsersDataService) { }

  ngOnInit(): void {
    this.Airlines();
  }

  Airlines() {
    this.userData.getAirlines().subscribe(data => {
      this.airlines = data;
    })
    console.warn();
  }
  DeleteAirlines(id: number) {
    this.userData.deleteAirline(id).subscribe(data => {
      this.Airlines();
    });
  }
  // UpdateFlights(data:any){
  //   this.userData.updateFlight(data,data.id);
  //   this.Flights();
  // }
  Search() {
    if (this.airlineName == "") {
      this.ngOnInit();
    } else {
      this.airlines = this.airlines.filter((res: any) => {
        return res.airlineName.toLocaleLowerCase().match(this.airlineName.toLocaleLowerCase());
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
