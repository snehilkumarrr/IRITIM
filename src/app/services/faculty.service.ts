import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../Shared/constants'; 
import { Utils } from '../Shared/Utils';
@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }


  getFaculty() {
    
    return this.http.get(constants.BASE_URL + 'Dashboard/getallFaculty', { headers: Utils.getHeader() })
  }
  addFaculty(data: any) {
    return this.http.post(constants.BASE_URL + 'Dashboard/addFaculty', data, { headers: Utils.getHeader() })
  }
  editFaculty(data: any, id: number) {
    return this.http.put(constants.BASE_URL + `Dashboard/editFaculty/${id}`, data, { headers: Utils.getHeader() })
  }
  getFacultywithId(id: number) {
    return this.http.get(constants.BASE_URL + `Dashboard/getFaculty/${id}`, { headers: Utils.getHeader() })
  }
  // facultydelete(id: any) {
  //   return this.http.delete(`constants.BASE_URL + 'Dashboard/delfaculty/${id}`)
  // }

}
