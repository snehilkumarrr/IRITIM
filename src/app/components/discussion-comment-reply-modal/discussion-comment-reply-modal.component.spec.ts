import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionCommentReplyModalComponent } from './discussion-comment-reply-modal.component';

describe('DiscussionCommentReplyModalComponent', () => {
  let component: DiscussionCommentReplyModalComponent;
  let fixture: ComponentFixture<DiscussionCommentReplyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionCommentReplyModalComponent]
    });
    fixture = TestBed.createComponent(DiscussionCommentReplyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
