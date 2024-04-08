import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCourseComponent } from './schedule-course.component';

describe('ScheduleCourseComponent', () => {
  let component: ScheduleCourseComponent;
  let fixture: ComponentFixture<ScheduleCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCourseComponent]
    });
    fixture = TestBed.createComponent(ScheduleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
