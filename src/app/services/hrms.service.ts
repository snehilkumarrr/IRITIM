import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HrmsService {

  constructor(private http: HttpClient) {
  }

  getEmp(data:any) {
    const url = `http://172.16.14.78:8080/Dashboard/callHrmsId`
 return   this.http.post(url,{hrms_id:data})
  }

}
