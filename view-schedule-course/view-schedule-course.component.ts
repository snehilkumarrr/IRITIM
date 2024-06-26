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
    this.http.get("10.64.29.243:8080/IRITM/Dashboard/getall-course-schedule").subscribe((resData: any) => {
      console.log(resData)
      this.scheduleDetail = resData
    })
  }

}
