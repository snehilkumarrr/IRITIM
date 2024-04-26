import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbacksService } from 'src/app/feedbacks.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(private feedback: FeedbacksService) { }



  formbackform: FormGroup = new FormGroup({
    rating: new FormControl(null),
    comment: new FormControl(null),
    userid: new FormControl(localStorage.getItem('username'))

  })


  feedbackFormHandler() {
    console.log(this.formbackform.value)
    this.feedback.postfeedback(this.formbackform.value).subscribe((resData: any) => {
      console.log(resData)
      Swal.fire({
        title: "Success",
        text: resData.message,
        icon: "success"
      });
    })
  }

}
