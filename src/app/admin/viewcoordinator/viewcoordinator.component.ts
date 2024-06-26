import { Component } from '@angular/core';
import { CoordinatorService } from 'src/app/services/coordinator.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-viewcoordinator',
  templateUrl: './viewcoordinator.component.html',
  styleUrls: ['./viewcoordinator.component.css']
})
export class ViewcoordinatorComponent {
  coordinator: any
  SuccssMsg: any
  constructor(private CoordinatorDetail: CoordinatorService, private router: Router) {
    CoordinatorDetail.getCoordinators().subscribe((resData) => {
      // console.log(resData)
      this.coordinator = resData
    })
  }
  EditCoordinator(id: number) {
    this.router.navigate([`/Editcoordinator/${id}`]);
  }
  CreateCoordinator() {
    this.router.navigate(['CreateCoordinator']);
  }

  // deleteCoordinator(id: number) {
  //   console.log(id)
  //   this.CoordinatorDetail.deleteCordinator(id).subscribe((resData: any) => {
  //     console.log(resData)
  //     // alert(resData.msg)
  //     Swal.fire({
  //       title: "Success",
  //       text: resData.msg,
  //       icon: "success"
  //     });
  //     // window.location.reload();
  //   })
  // }


}
