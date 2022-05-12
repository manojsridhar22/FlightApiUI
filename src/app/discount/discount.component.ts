import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  usersdiscount: any = [];
  couponCode: any;
  p: number = 1;
  constructor(private userData: UsersDataService) { }
  ngOnInit(): void {
    this.Discounts();
  }

  Discounts() {
    this.userData.getDiscounts().subscribe(data => {
      this.usersdiscount = data;
    })
  }
  DeleteDiscount(id: number) {
    this.userData.deleteDiscount(id).subscribe(data => {
      this.Discounts();
    });
  }

  Search() {
    if (this.couponCode == "") {
      this.ngOnInit();
    } else {
      this.usersdiscount = this.usersdiscount.filter((res: any) => {
        return res.couponCode.toLocaleLowerCase().match(this.couponCode.toLocaleLowerCase());
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
