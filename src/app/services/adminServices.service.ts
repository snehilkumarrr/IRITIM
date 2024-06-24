import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient) { }

  getHostelName() {
    const url = "http://172.16.14.78:8080/Dashboard/getHostelName"
    return this.http.get(url)
  }

  getAmenities() {
    const url = "http://172.16.14.78:8080/Dashboard/getAmmenities"
    return this.http.get(url)
  }

  getRoomType() {
    const url = "http://172.16.14.78:8080/Dashboard/getRoomType"
    return this.http.get(url)
  }

 postCreateRoom(data:any){
  const url = "http://172.16.14.78:8080/Dashboard/getRoomType"
  return this.http.post(url, data)
 }


}
