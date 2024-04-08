import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ScheduleCourseComponent } from './schedule-course/schedule-course.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    CoursesComponent,
    CreatecourseComponent,
    ViewCourseComponent,
    ScheduleCourseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
