import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  url = "http://10.64.29.243:8080/IRITM/Dashboard/saveregistraiondata"

  constructor(private http: HttpClient) {
  }

  saveUser(data: any) {
    console.log(data)
    return this.http.post(this.url, data)
  }


}
