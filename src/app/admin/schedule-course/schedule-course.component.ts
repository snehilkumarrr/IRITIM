import { Component } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { CoordinatorService } from 'src/app/services/coordinator.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
@Component({
  selector: 'app-schedule-course',
  templateUrl: './schedule-course.component.html',
  styleUrls: ['./schedule-course.component.css']
})
export class ScheduleCourseComponent {
  coursesData: any;
  coordinator: any
  // constructor(private courseDetail: CoursesService) {
  //   courseDetail.getCourse().subscribe((courseResponse) => {
  //     console.log(courseResponse)
  //     this.coursesData = courseResponse;
  //   });
  // }


  constructor(private courseDetail: CoursesService, private CoordinatorDetail: CoordinatorService) {
    courseDetail.getCourse().subscribe((resData) => {
      // console.log(resData)
      this.coursesData = resData
    })


    CoordinatorDetail.getCoordinators().subscribe((resData) => {
      // console.log(resData)
      this.coordinator = resData
    })
  }
  ScheduleCourseHandler(data: any) {
    console.log(data)

  }






}
