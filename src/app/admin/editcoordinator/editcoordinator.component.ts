import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoordinatorService } from 'src/app/services/coordinator.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-editcoordinator',
  templateUrl: './editcoordinator.component.html',
  styleUrls: ['./editcoordinator.component.css'],
})
export class EditcoordinatorComponent {
  coordinatorId: any;
  coordinatorDetail: any
  EditCoForm: any
  SuccessMsg: any
  constructor(private route: ActivatedRoute, private Coordinator: CoordinatorService) {
    this.coordinatorId = this.route.snapshot.paramMap.get('someData');
    // Use 'data' in your component logic.

    this.Coordinator.getSingleCoordinator(this.coordinatorId).subscribe((data) => {
      // console.log(data);
      this.coordinatorDetail = data
      this.EditCoForm = new FormGroup({
        name: new FormControl(this.coordinatorDetail.name),
        empid: new FormControl(this.coordinatorDetail.empid),
        emailid: new FormControl(this.coordinatorDetail.emailid),
        mobileno: new FormControl(this.coordinatorDetail.mobileno)
      });

    })


  }
  EditFormHandler() {
    // console.log(this.EditCoForm.value)
    this.Coordinator.editCordinator(this.coordinatorDetail.id, this.EditCoForm.value).subscribe((resdata) => {
      console.log(resdata);
      this.SuccessMsg = resdata
      alert(this.SuccessMsg.msg)
    })
  }

}
