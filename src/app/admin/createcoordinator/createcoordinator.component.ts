import { Component } from '@angular/core';
import { CoordinatorService } from 'src/app/services/coordinator.service';
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
    this.createCoordinator.createCordinator(data).subscribe((resData) => {
      this.Sucessmsg = resData
      alert(this.Sucessmsg.message)
    })
  }

}
