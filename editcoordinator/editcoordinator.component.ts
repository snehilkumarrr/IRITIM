import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoordinatorService } from 'src/app/services/coordinator.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-editcoordinator',
  templateUrl: './editcoordinator.component.html',
  styleUrls: ['./editcoordinator.component.css'],
})
export class EditcoordinatorComponent {
  coordinatorId: any;
  coordinatorDetail: any
  EditCoForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    empid: new FormControl(null),
    emailid: new FormControl(null),
    mobileno: new FormControl(null)
  });
  SuccessMsg: any
  constructor(private route: ActivatedRoute, private Coordinator: CoordinatorService) {
    this.coordinatorId = this.route.snapshot.paramMap.get('id');
    // Use 'data' in your component logic.

    this.Coordinator.getSingleCoordinator(this.coordinatorId).subscribe((data:any) => {
      // console.log(data);
      this.EditCoForm = new FormGroup({
        name: new FormControl(data.name),
        empid: new FormControl(data.empid),
        emailid: new FormControl(data.emailid),
        mobileno: new FormControl(data.mobileno)
      });

    })


  }
  EditFormHandler() {
    console.log(this.coordinatorId)
    this.Coordinator.editCordinator(this.coordinatorId, this.EditCoForm.value).subscribe((resdata:any) => {
      console.log(resdata);
      // alert(this.SuccessMsg.msg)
      Swal.fire({
        title: "Success",
        text: resdata.msg,
        icon: "success"
      });
    })
  }

}
