import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url = 'http://172.16.14.78:8080/Dashboard/getcourse';
  constructor(private http: HttpClient) { }
  getCourse() {
    return this.http.get(this.url);
  }


  createcourse(data: any) {
    const url = "http://172.16.14.78:8080/Dashboard/createcourse"
    return this.http.post(url, data)
  }

  courseedit(id:number,data:any){
    const url =`http://172.16.14.78:8080/Dashboard/editcourse/${id}`
    return this.http.post(url,data)
  }

  CourseDelete(id: number) {
    const url = `http://172.16.14.78:8080/Dashboard/deletecourse/${id}`
    return this.http.delete(url)
  }


  scheduleCourse(data: any) {

    const url = "http://172.16.14.78:8080/Dashboard/add-course-schedule"
    return this.http.post(url, data)
  }

  getScheduleCourse() {
    const url = "http://172.16.14.78:8080/Dashboard/getall-course-schedule"
    return this.http.get(url);

  }
   



  CourseApply(data:any) {
    const url = "http://172.16.14.78:8080/Dashboard/saveAppliedCourse"
    return this.http.post(url,data)
  }
  UserAppliedCourse(id:any) {
    // console.log(id)
    const url = `http://172.16.14.78:8080/Dashboard/getAppliedCourse/${id}`
    return this.http.get(url)

  }




}





