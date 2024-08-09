import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'coordinator-applied-course-new',
  templateUrl: './coordinator-applied-course-new.component.html',
  styleUrls: ['./coordinator-applied-course-new.component.css']
})
export class CoordinatorAppliedCourseNewComponent {

  coordinatorcourses: any

  ItemsArray: any;
  constructor(private courseDetail: CoursesService, private router: Router) { }
  ngOnInit() {

    this.courseDetail.getAllappliedCourse().subscribe((res) => {
      this.ItemsArray = res
    })

    this.courseDetail.CoordinatorAppliedCourse(localStorage.getItem('username')).subscribe((resData: any) => {
      // console.log(resData)
      this.coordinatorcourses = resData

    })

  }

  EditCoordinatorHandler() {
    this.router.navigate(['coordinator-applied-course-edit'])
  }
}
