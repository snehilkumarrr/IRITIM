import { Component } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  coursesData: any

  constructor(private courseDetail: CoursesService) {

    courseDetail.getCourse().subscribe((courseResponse) => {
      // console.log(data)
      this.coursesData = courseResponse
    })


  }

  signupHandler(data: any) {
    console.log(data)
  }
}
