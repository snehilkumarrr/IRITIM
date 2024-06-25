import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginStatus = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  Login(data: any) {
    const url = "https://testiritm.indianrailways.gov.in/IRITM/Dashboard/signin";
    return this.http.post(url, data);
  }

  emitLoginStatus(isLoggedIn: boolean) {
    this.loginStatus.next(isLoggedIn);
  }
}
