import { Component } from '@angular/core';
import { CoordinatorService } from 'src/app/services/coordinator.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-createcoordinator',
  templateUrl: './createcoordinator.component.html',
  styleUrls: ['./createcoordinator.component.css']
})
export class CreatecoordinatorComponent {

  Sucessmsg: any
  constructor(private createCoordinator: CoordinatorService) {
  }


  createCoordinatorHandler(data: any) {
    console.log(data)
    this.createCoordinator.createCordinator(data).subscribe((resData: any) => {
      console.log(resData)
      if (resData.statuscode == 400) {
        Swal.fire({
          title: "Warning",
          text: resData.message,
          icon: "warning"
        });
      }
      else {
        Swal.fire({
          title: "Success",
          text: resData.message,
          icon: "success"
        });
      }


    })
  }

}
