import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApplyVehicleService } from './apply-vehicle.service';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  selectedArrivalBy: any;
  selectedDeptlBy: any;
  vehicleform: FormGroup = new FormGroup({
    arrivaldatetime: new FormControl(null),
    arrivalby: new FormControl(null),
    arrivalstation: new FormControl(null),
    arrivalmodeno: new FormControl(null),
    departuredatetime: new FormControl(null),
    departureby: new FormControl(null),
    departurestation: new FormControl(null),
    departuremodeno: new FormControl(null),
    adults: new FormControl(null),
    children: new FormControl(null),
    userid: new FormControl(localStorage.getItem('username'))
  })




  ArrivalTypeHandler(data: any) {
    console.log(data.target.value)
    this.selectedArrivalBy = data.target.value
  }
  DeptTypeHandler(data: any) {
    console.log(data.target.value)
    this.selectedDeptlBy = data.target.value
  }

  constructor(private viehicle: ApplyVehicleService) { }


  ApplyVehicleHandler() {
    console.log(this.vehicleform.value)
    this.viehicle.VehicleRequest(this.vehicleform.value).subscribe((resData: any) => {
      console.log(resData)

      alert(resData.message)


    })
  }
}
