import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as constants from '../../Shared/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginStatus = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  Login(data: any) {
    const url = constants.BASE_URL + 'Dashboard/signin';
    return this.http.post(url, data);
  }

  emitLoginStatus(isLoggedIn: boolean) {
    this.loginStatus.next(isLoggedIn);
  }
}
