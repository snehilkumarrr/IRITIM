import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AdminService } from 'src/app/services/adminServices.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-hostel-management',
  templateUrl: './hostel-management.component.html',
  styleUrls: ['./hostel-management.component.css']
})
export class HostelManagementComponent implements OnInit {
  hostelArray: any;
  roomTypeArray: any;
  roomFeaturesArray: any;
  roomForm: FormGroup;

  constructor(private adminService: AdminService, private fb: FormBuilder, private location: Location) {
    this.roomForm = this.fb.group({
      hostelName: new FormControl(''),
      roomNo: new FormControl(''),
      roomType: new FormControl(''),
      floor: new FormControl(''),
      roomFeatures: new FormControl([]) // Initialize as an empty array
    });
  }

  ngOnInit() {
    this.adminService.getHostelName().subscribe((res) => {
      this.hostelArray = res;
    });

    this.adminService.getAmenities().subscribe((res) => {
      this.roomFeaturesArray = res;
    });

    this.adminService.getRoomType().subscribe((res) => {
      this.roomTypeArray = res;
    });
  }

  makeRoom() {
    if(this.roomForm.valid){
      var hostelDetail = {
        "hostelId": parseInt(this.roomForm.get('hostelName')?.value || 0),
        "roomNumber": parseInt(this.roomForm.get('roomNo')?.value || 0),
        "roomFeature": this.roomForm.get('roomFeatures')?.value || [0],
        "floor": parseInt(this.roomForm.get('floor')?.value) || 0,
        "roomType": parseInt(this.roomForm.get('roomType')?.value) || 0,
        "description": "abc"
      }

      this.adminService.postCreateRoom(hostelDetail).subscribe((res:any) => {
        res.message = "Created"
        Swal.fire({
          title: "Success",
          text: res.message,
          icon: "success"
        }).then((result) => {
          if (result.isConfirmed) {
            // Reload the page if the SweetAlert "OK" button is clicked
            window.location.reload();
          }
        });
      });

    }

  }
}
