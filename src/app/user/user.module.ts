import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewCourseComponent } from './view-course/view-course.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    ViewCourseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
