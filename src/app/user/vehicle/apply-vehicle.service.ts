import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApplyVehicleService {

  constructor(private http: HttpClient) {





  }
  getVehicle() {
   return this.http.get('http://10.64.29.243:8080/IRITM/Dashboard/getVehicleRequest/ya0146')
  }
  VehicleRequest(data: any) {
    const url = "http://10.64.29.243:8080/IRITM/Dashboard/VehicleRequest"
    return this.http.post(url, data)


  }

}
