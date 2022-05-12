import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url = "http://localhost:7000/api/user/UserRegister";
  constructor(private http: HttpClient) { }


  httpheader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    })
  };

  saveUser(data: any) {
    return this.http.post(this.url, data, this.httpheader);
  }

  saveAdmin(data:any){
    return this.http.post("http://localhost:7000/api/admin/AdminRegister",data, this.httpheader);
  }
  saveFlight(data: any): Observable<any> {
    return this.http.post("http://localhost:7000/api/user/FlightRegister", data, this.httpheader);
  }

  saveAirline(data: any) {
    return this.http.post("http://localhost:7000/api/admin/AddAirline", data, this.httpheader);
  }
  saveTicket(data: any) {
    return this.http.post("http://localhost:7000/api/user/BookTicket", data, this.httpheader);
  }
  saveTicketHistory(data:any){
    return this.http.post("http://localhost:7000/api/user/BookTicketHistory", data, this.httpheader);
  }
  saveDiscount(data: any) {
    return this.http.post("http://localhost:7000/api/admin/AddDiscount", data, this.httpheader);
  }

  login(uname: string, pass: string) {
    return this.http.get("http://localhost:7000/api/user/Login/" + uname + "/" + pass);
  }
  adminLogin(uname: string, pass: string) {
    return this.http.get("http://localhost:7000/api/admin/AdminLogin/" + uname + "/" + pass);
  }
  getFlights() {
    return this.http.get("http://localhost:7000/api/user/GetFlight");
  }
  getFlightsById(id: number) {
    return this.http.get("http://localhost:7000/api/user/GetFlightById/" + id);
  }
  getAirlines() {
    return this.http.get("http://localhost:7000/api/admin/GetAirline");
  }
  getAirlinesById(id: number) {
    return this.http.get("http://localhost:7000/api/admin/GetAirlineById/" + id);
  }
  getBookedHistory() {
    return this.http.get("http://localhost:7000/api/user/GetBookedTicketHistory");
  }
  getDiscounts() {
    return this.http.get("http://localhost:7000/api/admin/GetDiscount");
  }
  getDiscountsById(id: number) {
    return this.http.get("http://localhost:7000/api/admin/GetDiscountById/" + id);
  }
  searchFlights(fromplace: string, toplace: string, fromdate: any, todate: any) {
    return this.http.get("http://localhost:7000/api/user/SearchFlight/"
      + fromplace + "/" + toplace + "/" + fromdate + "/" + todate);
  }

  deleteFlight(id: number) {
    return this.http.delete("http://localhost:7000/api/user/DeleteFlight/" + id);
  }
  deleteAirline(id: number) {
    return this.http.delete("http://localhost:7000/api/admin/DeleteAirline/" + id);
  }
  deleteBookedHistory(pnr: number) {
    return this.http.delete("http://localhost:7000/api/user/DeleteBookTicketHistory/" + pnr);
  }
  deleteDiscount(id: number) {
    return this.http.delete("http://localhost:7000/api/admin/DeleteDiscount/" + id);
  }
  updateFlight(data: any, id: number) {
    return this.http.put("http://localhost:7000/api/user/UpdateFlight/" + id, data, this.httpheader);
  }
  updateAirline(data: any, id: number) {
    return this.http.put("http://localhost:7000/api/admin/ScheduleAirline/" + id, data, this.httpheader);
  }
  updateDiscount(data: any, id: number) {
    return this.http.put("http://localhost:7000/api/admin/UpdateDiscount/" + id, data, this.httpheader);
  }








}
