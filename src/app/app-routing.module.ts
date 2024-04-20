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
import { EditcourseComponent } from './admin/editcourse/editcourse.component'
import { DiscussionTopicListComponent } from './components/discussion-topic-list/discussion-topic-list.component';
import { DiscussionTopicCommentsComponent } from './components/discussion-topic-comments/discussion-topic-comments.component';
import { VehicleComponent } from "./user/vehicle/vehicle.component"
import { HostelComponent } from "./user/hostel/hostel.component"
import { AppliedCourseComponent } from "./user/applied-course/applied-course.component"
import { HostelReqtsComponent } from './admin/hostel-reqts/hostel-reqts.component';
import { ViewScheduleCourseComponent } from "./admin/view-schedule-course/view-schedule-course.component"
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
  { path: 'Editcoordinator/:id', component: EditcoordinatorComponent },
  { path: 'Editcourse/:id', component: EditcourseComponent },
  { path: 'DiscussionTopicList', component: DiscussionTopicListComponent },
  { path: 'DiscussionTopicComments', component: DiscussionTopicCommentsComponent },
  { path: 'Vehicle', component: VehicleComponent },
  { path: 'Hostel', component: HostelComponent },
  { path: "ApplyCourse", component: AppliedCourseComponent },
  { path: "HostelRequest", component: HostelReqtsComponent },
  { path: "ViewScheduleCourse", component: ViewScheduleCourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
