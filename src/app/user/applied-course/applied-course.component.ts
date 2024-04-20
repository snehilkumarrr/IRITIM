import { Component } from '@angular/core';
import { CoursesService } from "../../courses.service"
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-applied-course',
  templateUrl: './applied-course.component.html',
  styleUrls: ['./applied-course.component.css']
})
export class AppliedCourseComponent {
  scheduleCourse: any
  usercourses: any
  courseapplyform: FormGroup = new FormGroup({
    courseid: new FormControl(null),
    userid: new FormControl(localStorage.getItem('username'))
  })
  constructor(private Courses: CoursesService,) {
    this.Courses.getScheduleCourse().subscribe((resData) => {
      // console.log(resData)
      this.scheduleCourse = resData
    })

    this.Courses.UserAppliedCourse(localStorage.getItem('username')).subscribe((resData: any) => {
      // console.log(resData)
      this.usercourses = resData
    
      
    })



  }

  courseapplyHandler() {
    console.log(this.courseapplyform.value)
    this.Courses.CourseApply(this.courseapplyform.value).subscribe((resData:any) => {
       console.log(resData) 
      alert(resData.message)
        window.location.reload();
      })


  }


}
