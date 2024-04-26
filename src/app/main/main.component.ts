import { Component } from '@angular/core';
import { FeedbacksService } from '../feedbacks.service';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],

})
export class MainComponent {

  feedbackdetails: any
  constructor(private testimonials: FeedbacksService) {

    this.testimonials.getTestimonials().subscribe((resData: any) => {
      console.log(resData)
      this.feedbackdetails = resData



    })

  }

}
