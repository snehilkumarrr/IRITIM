import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from './Shared/constants';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url = constants.BASE_URL + 'Dashboard/getcourse';
  constructor(private http: HttpClient) { }
  getCourse() {
    return this.http.get(this.url);
  }


  createcourse(data: any) {
    const url = constants.BASE_URL + 'Dashboard/createcourse'
    return this.http.post(url, data)
  }

  courseedit(id:number,data:any){
    const url =constants.BASE_URL + `Dashboard/editcourse/${id}`
    return this.http.post(url,data)
  }

   CourseDelete(id: number) {
     const url = constants.BASE_URL + `Dashboard/deletecourse/${id}`
    return this.http.delete(url)
  }

  ScheduledCourseDelete(id: number){
    const url = constants.BASE_URL + `Dashboard/delete-course-schedule/${id}`
    return this.http.delete(url)
  }

  scheduleCourse(data: any) {

    const url = constants.BASE_URL + 'Dashboard/add-course-schedule'
    return this.http.post(url, data)
  }

  getScheduleCourse() {
    const url = constants.BASE_URL + 'Dashboard/getall-course-schedule'
    return this.http.get(url);

  }
   



  CourseApply(data:any) {
    const url = constants.BASE_URL + 'Dashboard/updateEnrolledCourseByUser'
    return this.http.put(url,data)
  }
  UserAppliedCourse(id:any) {
    // console.log(id)
    const url = constants.BASE_URL + `Dashboard/getAppliedCourse/${id}`
    return this.http.get(url)

  }

getAllappliedCourse(){
  const url = constants.BASE_URL + `Dashboard/getAppliedAllCourse`
    return this.http.get(url)
}


}