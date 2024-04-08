import { Component } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  coursesData: any;
  selected: string | undefined;
  employeeId: Boolean | undefined;

  constructor(private courseDetail: CoursesService) {

    courseDetail.getCourse().subscribe((courseResponse) => {
      // console.log(data)
      this.coursesData = courseResponse
    })


  }

  selectOption(value: string): void {
    this.selected = value; // Update the variable with the selected value
    console.log(this.selected)
    if (this.selected == "Railways") {
      this.employeeId = false
      // console.log(this.employeeId)
    } else {
      this.employeeId = true
    }
  }

  selectEmpGrp(value: string): void {
  }


  signupHandler(data: any) {
    console.log(data)
  }
}
