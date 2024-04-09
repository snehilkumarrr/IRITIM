import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  url = "http://172.16.14.78:8080/Dashboard/saveregistraiondata"

  constructor(private http: HttpClient) {
  }

  saveUser(data: any) {
    console.log(data)
    return this.http.post(this.url, data)
  }


}
