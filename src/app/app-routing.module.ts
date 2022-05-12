import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FlightsComponent} from './flights/flights.component';
import {UpdateflightComponent} from './updateflight/updateflight.component';
import {AddflightComponent} from './addflight/addflight.component';
import {AirlinesComponent} from './airlines/airlines.component';
import {UpdateairlineComponent} from './updateairline/updateairline.component';
import {AddairlineComponent} from './addairline/addairline.component';
import {BookticketComponent} from './bookticket/bookticket.component';
import {BookinghistoryComponent} from './bookinghistory/bookinghistory.component';
import {DiscountComponent} from './discount/discount.component';
import {AdddiscountComponent} from './adddiscount/adddiscount.component';
import {UpdatediscountComponent} from './updatediscount/updatediscount.component';
import {AdminnavbarComponent} from './adminnavbar/adminnavbar.component';
import {UsernavbarComponent} from './usernavbar/usernavbar.component';
import {SearchflightComponent} from './searchflight/searchflight.component'

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'flights',component:FlightsComponent},
  {path:'updateflight/:id',component:UpdateflightComponent},
  {path:'addflight',component:AddflightComponent},
  {path:'airlines',component:AirlinesComponent},
  {path:'updateairline/:id',component:UpdateairlineComponent},
  {path:'addairline',component:AddairlineComponent},
  {path:'bookticket',component:BookticketComponent},
  {path:'bookticket/:id',component:BookticketComponent},
  {path:'bookinghistory',component:BookinghistoryComponent},
  {path:'discount',component:DiscountComponent},
  {path:'adddiscount',component:AdddiscountComponent},
  {path:'updatediscount/:id',component:UpdatediscountComponent},
  {path:'adminnavbar',component:AdminnavbarComponent},
  {path:'usernavbar',component:UsernavbarComponent},
  {path:'searchflight',component:SearchflightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

