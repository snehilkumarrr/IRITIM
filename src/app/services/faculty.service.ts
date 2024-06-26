import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../Shared/constants'; 
@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }


  getFaculty() {
    
    return this.http.get(constants.BASE_URL + 'Dashboard/getallFaculty')
  }
  addFaculty(data: any) {
    return this.http.post(constants.BASE_URL + 'Dashboard/addFaculty', data)
  }
  editFaculty(data: any, id: number) {
    return this.http.put(constants.BASE_URL + `Dashboard/editFaculty/${id}`, data)
  }
  getFacultywithId(id: number) {
    return this.http.get(constants.BASE_URL + `Dashboard/getFaculty/${id}`)
  }
  // facultydelete(id: any) {
  //   return this.http.delete(`constants.BASE_URL + 'Dashboard/delfaculty/${id}`)
  // }

}
