import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }


  getFaculty() {
    return this.http.get('http://https://testiritm.indianrailways.gov.in//IRITM/Dashboard/getallFaculty')
  }
  addFaculty(data: any) {
    return this.http.post('http://https://testiritm.indianrailways.gov.in//IRITM/Dashboard/addFaculty', data)
  }
  editFaculty(data: any, id: number) {
    return this.http.put(`http://https://testiritm.indianrailways.gov.in//IRITM/Dashboard/editFaculty/${id}`, data)
  }
  getFacultywithId(id: number) {
    return this.http.get(`http://https://testiritm.indianrailways.gov.in//IRITM/Dashboard/getFaculty/${id}`)
  }
  facultydelete(id: any) {
    return this.http.delete(`http://https://testiritm.indianrailways.gov.in//IRITM/Dashboard/delfaculty/${id}`)
  }

}
