import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url = 'http://172.16.14.78:8080/Dashboard/getcourse';
  constructor(private http: HttpClient) { }
  getCourse() {
    return this.http.get(this.url);
  }


  createcourse(data: any) {
    const url = "http://172.16.14.78:8080/Dashboard/createcourse"
    this.http.post(url, data)
  }
  scheduleCourse(data: any) {

    const url = "http://172.16.14.78:8080/Dashboard/add-course-schedule"
    return this.http.post(url, data)
  }

  getScheduleCourse() {
    const url = "http://172.16.14.78:8080/Dashboard/getall-course-schedule"
    return this.http.get(url);

  }

  CourseDelete() {
    const url = ""
    return this.http.delete(url)
  }



}





