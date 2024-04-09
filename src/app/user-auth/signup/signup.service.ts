import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  url=""
  data:any
  constructor(private http: HttpClient) {
    this.http.post(this.url,this.data)
  }
}
