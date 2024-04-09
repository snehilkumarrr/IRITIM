import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {
  ItemsArray: any;
  constructor(private courseDetail: CoursesService) { }
  ngOnInit() {

    this.courseDetail.getCourse().subscribe((res) => {
      this.ItemsArray = res
    })
  }
}

