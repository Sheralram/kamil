import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  
  get(requestUrl: string): Observable<any> {
    const url = environment.baseURL + requestUrl;
    return this.http.get(url);
  }

  post(requestUrl: string, body: any) {
    const url = environment.baseURL + requestUrl;
    return this.http.post(url, body);
  }

  postRequest(requestUrl: string, body: any  , httpOptions:any) {
    const url = environment.baseURL + requestUrl;
    // let header = new HttpHeaders({'content-type': 'application/text'});
    return this.http.post(url,body,httpOptions);
  }
}


