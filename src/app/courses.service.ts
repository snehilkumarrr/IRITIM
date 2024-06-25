import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url = 'https://testiritm.indianrailways.gov.in/IRITM/Dashboard/getcourse';
  constructor(private http: HttpClient) { }
  getCourse() {
    return this.http.get(this.url);
  }


  createcourse(data: any) {
    const url = "https://testiritm.indianrailways.gov.in/IRITM/Dashboard/createcourse"
    return this.http.post(url, data)
  }

  courseedit(id:number,data:any){
    const url =`https://testiritm.indianrailways.gov.in/IRITM/Dashboard/editcourse/${id}`
    return this.http.post(url,data)
  }

  CourseDelete(id: number) {
    const url = `https://testiritm.indianrailways.gov.in/IRITM/Dashboard/deletecourse/${id}`
    return this.http.delete(url)
  }


  scheduleCourse(data: any) {

    const url = "https://testiritm.indianrailways.gov.in/IRITM/Dashboard/add-course-schedule"
    return this.http.post(url, data)
  }

  getScheduleCourse() {
    const url = "https://testiritm.indianrailways.gov.in/IRITM/Dashboard/getall-course-schedule"
    return this.http.get(url);

  }
   



  CourseApply(data:any) {
    const url = "https://testiritm.indianrailways.gov.in/IRITM/Dashboard/saveAppliedCourse"
    return this.http.post(url,data)
  }
  UserAppliedCourse(id:any) {
    // console.log(id)
    const url = `https://testiritm.indianrailways.gov.in/IRITM/Dashboard/getAppliedCourse/${id}`
    return this.http.get(url)

  }

getAllappliedCourse(){
  const url = `http://172.16.14.78:8080/Dashboard/getAppliedAllCourse`
    return this.http.get(url)
}


}





