import { Component } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
@Component({
  selector: 'createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css'],
})
export class CreatecourseComponent {

  createCourseHandler(data: any) {
    console.log(data)
  }

}
