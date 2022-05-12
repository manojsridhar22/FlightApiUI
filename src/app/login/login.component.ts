import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { UsersDataService } from '../services/users-data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  myImage: string = "assets/images/flightlogin.jpg";
  constructor(private userData: UsersDataService, private route: Router) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  myform: any;
  email: any;
  password: any;


  createFormControls() {
    this.email = new FormControl('', [Validators.required, Validators.pattern("[^@]*@[^ @]*")]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  }

  createForm() {
    this.myform = new FormGroup({
      email: this.email,
      password: this.password,
    })
  }

  adminCheck: any | boolean = true;
  public adminChanged(value: boolean) {
    this.adminCheck = value;
  }
  Signin(data: any) {

    if (this.adminCheck == true) {
      this.userData.adminLogin(data.email, data.password).subscribe(result => {
        if (result != null) {
          this.route.navigate(['/airlines']);
        }
        else {
          this.route.navigate(['/register']);
        }
      })
    }
    else {
      this.userData.login(data.email, data.password).subscribe(result => {
        if (result != null) {
          this.route.navigate(['/searchflight']);
        }
        else {
          this.route.navigate(['/register']);
        }
      })
    }
  }

}
