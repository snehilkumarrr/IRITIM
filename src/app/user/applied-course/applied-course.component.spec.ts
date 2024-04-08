import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedCourseComponent } from './applied-course.component';

describe('AppliedCourseComponent', () => {
  let component: AppliedCourseComponent;
  let fixture: ComponentFixture<AppliedCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliedCourseComponent]
    });
    fixture = TestBed.createComponent(AppliedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
