import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceSprintResultComponent } from './race-sprint-result.component';

describe('RaceSprintResultComponent', () => {
  let component: RaceSprintResultComponent;
  let fixture: ComponentFixture<RaceSprintResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceSprintResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceSprintResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
