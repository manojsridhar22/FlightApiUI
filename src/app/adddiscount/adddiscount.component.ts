import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adddiscount',
  templateUrl: './adddiscount.component.html',
  styleUrls: ['./adddiscount.component.css']
})
export class AdddiscountComponent implements OnInit {

  constructor(private userData: UsersDataService, private route: Router) { }

  myform: any;
  CouponCode: any;
  DiscountValue: any;

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.CouponCode = new FormControl('', [Validators.required]);
    this.DiscountValue = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.myform = new FormGroup({
      CouponCode: this.CouponCode,
      DiscountValue: this.DiscountValue,
    })
  }
  AddedDiscount(data: any) {
    this.userData.saveDiscount(data).subscribe(result => {
      alert("Discount Added Successfully!")
      this.route.navigate(['/discount']);
    });
  }
}
