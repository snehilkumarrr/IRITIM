import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApplyVehicleService {

  constructor(private http: HttpClient) {





  }
  getVehicle() {
   return this.http.get('http://https://testiritm.indianrailways.gov.in//IRITM/Dashboard/getVehicleRequest/ya0146')
  }
  VehicleRequest(data: any) {
    const url = "http://https://testiritm.indianrailways.gov.in//IRITM/Dashboard/VehicleRequest"
    return this.http.post(url, data)


  }

}
