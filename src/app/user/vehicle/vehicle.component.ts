import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
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
    departuredatetime: new FormControl(null),
    departureby: new FormControl(null),
    departurestation: new FormControl(null),
    adult: new FormControl(null),
    children: new FormControl(null)
  })

  ArrivalTypeHandler(data: any) {
    console.log(data.target.value)
    this.selectedArrivalBy = data.target.value
  }
  DeptTypeHandler(data: any) {
    console.log(data.target.value)
    this.selectedDeptlBy = data.target.value
  }

  constructor() { }


  ApplyVehicleHandler() {
    console.log(this.vehicleform.value)
  }
}
