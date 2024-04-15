import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionTopicCommentsComponent } from './discussion-topic-comments.component';

describe('DiscussionTopicCommentsComponent', () => {
  let component: DiscussionTopicCommentsComponent;
  let fixture: ComponentFixture<DiscussionTopicCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionTopicCommentsComponent]
    });
    fixture = TestBed.createComponent(DiscussionTopicCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
