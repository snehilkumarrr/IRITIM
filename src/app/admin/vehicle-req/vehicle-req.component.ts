import { Component } from '@angular/core';
import { VehicleReqListService } from './vehicle-req-list.service';
@Component({
  selector: 'app-vehicle-req',
  templateUrl: './vehicle-req.component.html',
  styleUrls: ['./vehicle-req.component.css']
})
export class VehicleReqComponent {

  vehicleReqDetail: any


  constructor(private Vehicle: VehicleReqListService) {


    this.Vehicle.showVehicle().subscribe((resData: any) => {
      console.log(resData)
      this.vehicleReqDetail = resData
    })

  }

}
