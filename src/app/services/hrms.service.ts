import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HrmsService {

  constructor(private http: HttpClient) {
  }

  getEmp(id: any) {
    const url = `http://localhost:3000/users/${id}`
 return   this.http.get(url)
  }

}
