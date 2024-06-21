import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }


  getFaculty() {
    return this.http.get('http://10.64.29.243:8080/IRITM/Dashboard/getallFaculty')
  }
  addFaculty(data: any) {
    return this.http.post('http://10.64.29.243:8080/IRITM/Dashboard/addFaculty', data)
  }
  editFaculty(data: any, id: number) {
    return this.http.put(`http://10.64.29.243:8080/IRITM/Dashboard/editFaculty/${id}`, data)
  }
  getFacultywithId(id: number) {
    return this.http.get(`http://10.64.29.243:8080/IRITM/Dashboard/getFaculty/${id}`)
  }
  facultydelete(id: any) {
    return this.http.delete(`http://10.64.29.243:8080/IRITM/Dashboard/delfaculty/${id}`)
  }

}
