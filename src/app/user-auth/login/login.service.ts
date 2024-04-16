import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  Login(data:any) {
    const url ="http://172.16.14.78:8080/Dashboard/signin"
   return this.http.post(url,data)
  }
}
