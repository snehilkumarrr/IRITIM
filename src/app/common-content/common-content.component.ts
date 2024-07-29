import { Component, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonContentService } from '../commonContent.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-common-content',
  templateUrl: './common-content.component.html',
  styleUrls: ['./common-content.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class CommonContentComponent {

  contentId:any;
  getContent:any;
  constructor(private route: ActivatedRoute,private commonContentService :CommonContentService,public modalService: NgbModal) {
   
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.contentId=params['contentId'];
      this.commonContentService.getContent(this.contentId).subscribe((data:any) => {
        this.getContent=data[0].content;
      });
    });
  }
}
