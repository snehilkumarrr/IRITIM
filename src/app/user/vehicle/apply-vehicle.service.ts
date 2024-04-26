import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApplyVehicleService {

  constructor(private http: HttpClient) {





  }
  getVehicle() {
   return this.http.get('http://172.16.14.78:8080/Dashboard/getVehicleRequest/ya0146')
  }
  VehicleRequest(data: any) {
    const url = "http://172.16.14.78:8080/Dashboard/VehicleRequest"
    return this.http.post(url, data)


  }

}
