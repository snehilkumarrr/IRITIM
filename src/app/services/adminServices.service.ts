import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as constants from '../Shared/constants';
import { Utils } from '../Shared/Utils';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient) { }

  getHostelName() {
    const url = constants.BASE_URL + 'Dashboard/getHostelName'
    return this.http.get(url, { headers: Utils.getHeader() })
  }

  getAmenities() {
    const url = constants.BASE_URL + 'Dashboard/getAmmenities'
    return this.http.get(url, { headers: Utils.getHeader() })
  }

  getRoomType() {
    const url = constants.BASE_URL + 'Dashboard/getRoomType'
    return this.http.get(url, { headers: Utils.getHeader() })
  }

 postCreateRoom(data:any){
  const url = constants.BASE_URL + 'Dashboard/getRoomType'
  return this.http.post(url, data, { headers: Utils.getHeader() })
 }


}
