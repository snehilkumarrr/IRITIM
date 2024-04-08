import { Component } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  coursesData: any

  constructor(private courseDetail: CoursesService) {

    courseDetail.getCourse().subscribe((data) => {
      // console.log(data)
      this.coursesData = data
    })

  }
}
