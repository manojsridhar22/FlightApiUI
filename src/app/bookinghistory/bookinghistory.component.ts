import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {

  usershistory: any = [];
  pnr: any;
  p: number = 1;
  constructor(private userData: UsersDataService) { }
  ngOnInit(): void {
    this.BookedHistory();
  }

  BookedHistory() {
    this.userData.getBookedHistory().subscribe(data => {
      this.usershistory = data;
    })
    console.warn();
  }
  DeleteBookedHistory(pnr: number) {
    this.userData.deleteBookedHistory(pnr).subscribe(data => {
    this.BookedHistory();
  });
  }
  
  Search(){
    if(this.pnr==""){
      this.ngOnInit();
    }else{
      this.usershistory=this.usershistory.filter((res: any)=>{
        return res.pnr.toLocaleLowerCase().match(this.pnr.toLocaleLowerCase());
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
