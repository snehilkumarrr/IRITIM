import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }


  getFaculty() {
    return this.http.get('http://172.16.14.78:8080/Dashboard/getallFaculty')
  }
  addFaculty(data: any) {
    return this.http.post('http://172.16.14.78:8080/Dashboard/addFaculty', data)
  }
  editFaculty(data: any, id: number) {
    return this.http.put(`http://172.16.14.78:8080/Dashboard/editFaculty/${id}`, data)
  }
  getFacultywithId(id: number) {
    return this.http.get(`http://172.16.14.78:8080/Dashboard/getFaculty/${id}`)
  }
  facultydelete(id: any) {
    return this.http.delete(`http://172.16.14.78:8080/Dashboard/delfaculty/${id}`)
  }

}
