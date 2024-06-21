import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HrmsService {

  constructor(private http: HttpClient) {
  }

  getEmp(data:any) {
    const url = `http://10.64.29.243:8080/IRITM/Dashboard/callHrmsId`
 return   this.http.post(url,{hrms_id:data})
  }

}
