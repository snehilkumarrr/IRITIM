import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view-schedule-course',
  templateUrl: './view-schedule-course.component.html',
  styleUrls: ['./view-schedule-course.component.css']
})
export class ViewScheduleCourseComponent {
  scheduleDetail: any

  constructor(private http: HttpClient) {
    this.http.get("http://172.16.14.78:8080/Dashboard/getall-course-schedule").subscribe((resData: any) => {
      console.log(resData)
      this.scheduleDetail = resData
    })
  }

}
