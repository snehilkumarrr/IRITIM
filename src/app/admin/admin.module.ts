import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ScheduleCourseComponent } from './schedule-course/schedule-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CreatecoordinatorComponent } from './createcoordinator/createcoordinator.component';
import { ViewcoordinatorComponent } from './viewcoordinator/viewcoordinator.component';
import { EditcoordinatorComponent } from './editcoordinator/editcoordinator.component';
@NgModule({
  declarations: [
    AdminDashboardComponent,
    CreatecourseComponent,
    ViewCourseComponent,
    ScheduleCourseComponent,
    CreatecoordinatorComponent,
    ViewcoordinatorComponent,
    EditcoordinatorComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserModule
  ]
})
export class AdminModule { }
