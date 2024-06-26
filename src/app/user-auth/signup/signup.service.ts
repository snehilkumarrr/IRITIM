import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../Shared/constants';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  url = constants.BASE_URL + 'Dashboard/saveregistraiondata'

  constructor(private http: HttpClient) {
  }

  saveUser(data: any) {
    console.log(data)
    return this.http.post(this.url, data)
  }


}
