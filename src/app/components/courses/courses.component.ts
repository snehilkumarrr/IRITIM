import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }




}
