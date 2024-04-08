import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url = 'http://172.16.14.78:8080/Dashboard/getcourse';
  constructor(private http: HttpClient) {}
  getCourse() {
    return this.http.get(this.url);
  }
}
