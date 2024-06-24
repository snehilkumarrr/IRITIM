import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../Shared/constants'; 

@Injectable({
  providedIn: 'root'
})
export class HrmsService {

  constructor(private http: HttpClient) {
  }

  getEmp(data:any) {

    const url = constants.BASE_URL+`Dashboard/callHrmsId`
 return   this.http.post(url,{hrms_id:data})
  }

}
