import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AppliedCourseComponent } from './applied-course/applied-course.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BooksComponent } from './books/books.component';
import { HostelComponent } from './hostel/hostel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FeedbackComponent } from './feedback/feedback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    UserDashboardComponent,
    AppliedCourseComponent,
    VehicleComponent,
    BooksComponent,
    HostelComponent,
    FeedbackComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    NgbModule 
  ]
})
export class UserModule { }
