import { Component } from '@angular/core';
import { CoordinatorService } from 'src/app/services/coordinator.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewcoordinator',
  templateUrl: './viewcoordinator.component.html',
  styleUrls: ['./viewcoordinator.component.css']
})
export class ViewcoordinatorComponent {
  coordinator: any

  constructor(private CoordinatorDetail: CoordinatorService, private router: Router) {
    CoordinatorDetail.getCoordinators().subscribe((resData) => {
      // console.log(resData)
      this.coordinator = resData
    })
  }
  EditCoordinator() {
    this.router.navigate(['Editcoordinator']);
  }
  deleteCoordinator(id: number) {
    this.CoordinatorDetail.deleteCordinator(id).subscribe((resData)=>{
      console.log(resData)
    })
  }


}
