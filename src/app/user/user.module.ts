import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { AppliedCourseComponent } from './applied-course/applied-course.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BooksComponent } from './books/books.component';
import { HostelComponent } from './hostel/hostel.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserDashboardComponent,
    ViewCourseComponent,
    AppliedCourseComponent,
    VehicleComponent,
    BooksComponent,
    HostelComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserModule { }
