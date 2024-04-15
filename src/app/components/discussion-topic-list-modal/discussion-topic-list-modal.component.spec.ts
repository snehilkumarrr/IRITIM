import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionTopicListModalComponent } from './discussion-topic-list-modal.component';

describe('DiscussionTopicListModalComponent', () => {
  let component: DiscussionTopicListModalComponent;
  let fixture: ComponentFixture<DiscussionTopicListModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionTopicListModalComponent]
    });
    fixture = TestBed.createComponent(DiscussionTopicListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
