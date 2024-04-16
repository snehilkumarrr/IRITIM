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
  SuccssMsg:any
  constructor(private CoordinatorDetail: CoordinatorService, private router: Router) {
    CoordinatorDetail.getCoordinators().subscribe((resData) => {
      // console.log(resData)
      this.coordinator = resData
    })
  }
  EditCoordinator(id:number) {
    this.router.navigate(['Editcoordinator',{ someData: id }]);
  }
  CreateCoordinator() {
    this.router.navigate(['CreateCoordinator']);
  }
  
  deleteCoordinator(id: number) {
    console.log(id)
    this.CoordinatorDetail.deleteCordinator(id).subscribe((resData)=>{
      console.log(resData)
      this.SuccssMsg= resData
      alert(this.SuccssMsg.msg)
      window.location.reload();
    })
  }


}
