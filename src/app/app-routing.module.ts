import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './user-auth/login/login.component';
import { SignupComponent } from './user-auth/signup/signup.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { CreatecourseComponent } from './admin/createcourse/createcourse.component';
import { ViewCourseComponent } from './admin/view-course/view-course.component';
import { ScheduleCourseComponent } from './admin/schedule-course/schedule-course.component';
import { CreatecoordinatorComponent } from './admin/createcoordinator/createcoordinator.component';
import { ViewcoordinatorComponent } from './admin/viewcoordinator/viewcoordinator.component';
import { EditcoordinatorComponent } from './admin/editcoordinator/editcoordinator.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'userDashboard', component: UserDashboardComponent },
  { path: 'CreateCourse', component: CreatecourseComponent },
  { path: 'ViewCourse', component: ViewCourseComponent },
  { path: 'ScheduleCourse', component: ScheduleCourseComponent },
  { path: 'CreateCoordinator', component: CreatecoordinatorComponent },
  { path: 'ViewCoordinator', component: ViewcoordinatorComponent },
  { path: 'Editcoordinator', component: EditcoordinatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
