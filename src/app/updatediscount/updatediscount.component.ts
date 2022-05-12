import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatediscount',
  templateUrl: './updatediscount.component.html',
  styleUrls: ['./updatediscount.component.css']
})
export class UpdatediscountComponent implements OnInit {
  Discount: any = [];
  AirlineName: any;
  constructor(private userData: UsersDataService, private router: ActivatedRoute,private route:Router) { }

  myform: any;
  id:any;
  CouponCode: any;
  DiscountValue: any;

  ngOnInit(): void {
    this.Update(this.router.snapshot.params['id']);
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.id = new FormControl('', [Validators.required]);
    this.CouponCode = new FormControl('', [Validators.required]);
    this.DiscountValue = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.myform = new FormGroup({
      id: this.id,
      CouponCode: this.CouponCode,
      DiscountValue: this.DiscountValue,
    })
  }
  Update(id: number) {
    this.userData.getDiscountsById(id).subscribe(result => {
     this.Discount=result;
    });
  }
  UpdatedDiscount(data:any){
    this.userData.updateDiscount(data,this.router.snapshot.params['id']).subscribe(result=>{
      alert("Discount Updated Successfully!");
      this.route.navigate(['/discount']);
    });
  }
}
