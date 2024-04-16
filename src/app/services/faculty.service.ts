import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  constructor(private http: HttpClient) { }


  getFaculty() {
    const url = "http://172.16.14.78:8080/Dashboard/getallFaculty"
    return this.http.get(url)
  }

}
