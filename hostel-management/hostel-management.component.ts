import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; // Import FormsModule
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { AdminService } from 'src/app/services/adminServices.service';

@Component({
  selector: 'app-hostel-management',
  templateUrl: './hostel-management.component.html',
  styleUrls: ['./hostel-management.component.css']
})
export class HostelManagementComponent {
  hostelArray:any;
  roomTypeArray:any;
  roomFeaturesArray:any;
  roomForm: FormGroup = new FormGroup({
    hostelName: new FormControl(null),
    roomNo: new FormControl(null),
    roomType: new FormControl(null),
    floor: new FormControl(null),
    roomFeatures: new FormControl(null),
  });
  constructor(private adminService:AdminService){

  }

  ngOnInit() {

    this.adminService.getHostelName().subscribe((res) => {
      this.hostelArray = res
    })

    this.adminService.getAmenities().subscribe((res) => {
      this.roomFeaturesArray = res
    })

    this.adminService.getRoomType().subscribe((res) => {
      this.roomTypeArray = res
    })
    

  }

  makeRoom(){

  }
}
