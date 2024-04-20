import { Component } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { FormControl, FormGroup } from '@angular/forms'; // Import FormsModule
@Component({
  selector: 'createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css'],
})
export class CreatecourseComponent {

  createcourseform: FormGroup = new FormGroup({
    coursename: new FormControl(null),
    coursecode: new FormControl(null),
    coursedescription: new FormControl(null)
  })

  constructor(private crcourse: CoursesService) { }
  createCourseHandler() {
    console.log(this.createcourseform.value)
    this.crcourse.createcourse(this.createcourseform.value).subscribe((resData: any) => {
      console.log(resData.message)
      alert(resData.message)
    })


  }

}
