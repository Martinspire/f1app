import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextScheduleComponent } from './next-schedule.component';

describe('NextScheduleComponent', () => {
  let component: NextScheduleComponent;
  let fixture: ComponentFixture<NextScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
