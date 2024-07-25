import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../../Shared/constants';
import { CoursesService } from 'src/app/courses.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-schedule-course',
  templateUrl: './view-schedule-course.component.html',
  styleUrls: ['./view-schedule-course.component.css']
})
export class ViewScheduleCourseComponent implements OnInit{
  ItemsArray: any;
  scheduleDetail: any

  constructor(private courseDetail: CoursesService,private http: HttpClient) {
    this.http.get(constants.BASE_URL + 'Dashboard/getall-course-schedule').subscribe((resData: any) => {
      console.log(resData)
      this.scheduleDetail = resData
    })
  }
  ngOnInit() {

    this.courseDetail.getScheduleCourse().subscribe((res) => {
      this.ItemsArray = res
    })

  }

  deleteScheduledCourse(id: any) {
    console.log(id)
    this.courseDetail.ScheduledCourseDelete(id).subscribe((resData: any) => {
      console.log(resData)
      alert(resData.msg)
      window.location.reload();
      
      
    })
    
 }

}
