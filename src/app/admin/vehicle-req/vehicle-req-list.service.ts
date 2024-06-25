import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VehicleReqListService {

  constructor(private http : HttpClient) {

  
   }
   showVehicle(){
    const url ="https://testiritm.indianrailways.gov.in/IRITM/Dashboard/getAllVehicleRequest"
   return this.http.get(url)
   }
}
