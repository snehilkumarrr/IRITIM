import { Component } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { CoordinatorService } from 'src/app/services/coordinator.service';
import { FacultyService } from 'src/app/services/faculty.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-schedule-course',
  templateUrl: './schedule-course.component.html',
  styleUrls: ['./schedule-course.component.css']
})
export class ScheduleCourseComponent {
  coursesData: any;
  coordinator: any
  FacultyDetail: any
  ScheduleMSG: any
  constructor(private courseDetail: CoursesService, private CoordinatorDetail: CoordinatorService, private Faculty: FacultyService, private router: Router) {
    courseDetail.getCourse().subscribe((resData) => {
      // console.log(resData)
      this.coursesData = resData
    })

    CoordinatorDetail.getCoordinators().subscribe((resData) => {
      // console.log(resData)
      this.coordinator = resData
    })

    Faculty.getFaculty().subscribe((resData) => {
      // console.log(resData)
      this.FacultyDetail = resData
    })
  }
  ScheduleCourseHandler(data: any) {
    console.log(data)
    this.courseDetail.scheduleCourse(data).subscribe((resData: any) => {
      console.log(resData)
      // alert(resData.msg)
      Swal.fire({
        title: "Success",
        text: resData.msg,
        icon: "success"
      });
    })

  }
  ViewScheduleCourseHandler() {
    this.router.navigate(['ViewScheduleCourse'])
  }






}
