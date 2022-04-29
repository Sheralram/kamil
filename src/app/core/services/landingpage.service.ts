import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LandingpageService {

  constructor(private http: HttpService) { }

  getDataByField(data: any) {

    let t = localStorage.getItem("authToken")
    const headers = new HttpHeaders({
      'Authorization':t
    });
  

    const url = `/getdata`;

    return this.http.postRequest(url, data, headers)
    
   
  }
}
