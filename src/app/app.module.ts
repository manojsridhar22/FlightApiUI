import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FlightsComponent } from './flights/flights.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { AddflightComponent } from './addflight/addflight.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { UpdateairlineComponent } from './updateairline/updateairline.component';
import { AddairlineComponent } from './addairline/addairline.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { DiscountComponent } from './discount/discount.component';
import { AdddiscountComponent } from './adddiscount/adddiscount.component';
import { UpdatediscountComponent } from './updatediscount/updatediscount.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { SearchflightComponent } from './searchflight/searchflight.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FlightsComponent,
    UpdateflightComponent,
    AddflightComponent,
    AirlinesComponent,
    UpdateairlineComponent,
    AddairlineComponent,
    BookticketComponent,
    BookinghistoryComponent,
    DiscountComponent,
    AdddiscountComponent,
    UpdatediscountComponent,
    AdminnavbarComponent,
    UsernavbarComponent,
    SearchflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
