import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from './Shared/constants';
import { Utils } from './Shared/Utils';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url = constants.BASE_URL + 'Dashboard/getcourse';
  constructor(private http: HttpClient) { }
  getCourse() {
    return this.http.get(this.url, { headers: Utils.getHeader() });
  }


  createcourse(data: any) {
    const url = constants.BASE_URL + 'Dashboard/createcourse'
    return this.http.post(url, data, { headers: Utils.getHeader() })
  }

  courseedit(id:number,data:any){
    const url =constants.BASE_URL + `Dashboard/editcourse/${id}`
    return this.http.post(url,data, { headers: Utils.getHeader() })
  }

   CourseDelete(id: number) {
     const url = constants.BASE_URL + `Dashboard/deletecourse/${id}`
    return this.http.delete(url, { headers: Utils.getHeader() })
  }

  ScheduledCourseDelete(id: number){
    const url = constants.BASE_URL + `Dashboard/delete-course-schedule/${id}`
    return this.http.delete(url, { headers: Utils.getHeader() })
  }

  scheduleCourse(data: any) {

    const url = constants.BASE_URL + 'Dashboard/add-course-schedule'
    return this.http.post(url, data, { headers: Utils.getHeader() })
  }

  getScheduleCourse() {
    const url = constants.BASE_URL + 'Dashboard/getall-course-schedule'
    return this.http.get(url, { headers: Utils.getHeader() });

  }

  CoordinatorAppliedCourseEdit(data:any){
    const url =constants.BASE_URL + `Dashboard/updateEnrolledCourseBycoordinator`
    return this.http.put(url,data, { headers: Utils.getHeader() })
  }

  CourseApply(data:any) {
    const url = constants.BASE_URL + 'Dashboard/saveAppliedCourse'
    return this.http.post(url,data, { headers: Utils.getHeader() })
  }
  UserAppliedCourse(id:any) {
    // console.log(id)
    const url = constants.BASE_URL + `Dashboard/getAppliedCourse/${id}`
    return this.http.get(url, { headers: Utils.getHeader() })

  }

  CoordinatorAppliedCourse(id:any) {
    // console.log(id)
    const url = constants.BASE_URL + `Dashboard/getAppliedUserByCoordinator/${id}`
    return this.http.get(url, { headers: Utils.getHeader() })

  }
  

getAllappliedCourse(){
  const url = constants.BASE_URL + `Dashboard/getAppliedAllCourse`
    return this.http.get(url, { headers: Utils.getHeader() })
}


}