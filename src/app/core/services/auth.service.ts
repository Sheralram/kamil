import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpService) { }

  loginUser(data: any) {
    const url = `/authenticate`;

    const headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    const req = new FormData();
    req.set('j_username', data.username);
    req.set('j_password', data.password);
    const reqNew = "j_username=" + data.username + "&j_password=" + data.password;
    return this.http.postRequest(url, reqNew, {headers:headers})
   
  }

  getToken() {
    return localStorage.getItem("access_token");
  }

  // userRegister(data:any) {
  //   const url = `/register/user`;
  //   return this.http.post(url, data)
  // }

  // forgetPassword(data:any) {
  //   const url = `/forgotPassword`;
  //   return this.http.post(url, data)
  // }

  // changePassword(data: any) {
  //   const url = `/changePassword`;
  //   return this.http.post(url, data)
  // }

  logout(data: any) {
    const url = `/logout`;
    return this.http.post(url, data)
  }

 
 


  

 
}

