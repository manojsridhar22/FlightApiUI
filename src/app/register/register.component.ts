import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersDataService } from '../services/users-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private userData: UsersDataService, private route: Router) { }

  myform: any;
  UserName: any;
  FirstName: any;
  LastName: any;
  Age: any;
  Address: any;
  Password: any;
  ConfirmPassword: any;

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.UserName = new FormControl('', [Validators.required]);
    this.FirstName = new FormControl('', [Validators.required]);
    this.LastName = new FormControl('', [Validators.required]);
    this.Age = new FormControl('', [Validators.required]);
    this.Address = new FormControl('', [Validators.required]);
    this.Password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.ConfirmPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  }

  createForm() {
    this.myform = new FormGroup({
      UserName: this.UserName,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Age: this.Age,
      Address: this.Address,
      Password: this.Password,
      ConfirmPassword: this.ConfirmPassword,
    })
  }
  adminCheck: any | boolean = true;
  public adminChanged(value: boolean) {
    this.adminCheck = value;
  }

  Register(data: any) {
    if (this.adminCheck == true) {
      this.userData.saveAdmin(data).subscribe(result => {
        alert("Admin Registered Successfully!");
        this.route.navigate(['/login']);
      });
    }
    else {
      this.userData.saveUser(data).subscribe(result => {
        alert("User Registered Successfully!");
        this.route.navigate(['/login']);
      });
    }
  }



}
