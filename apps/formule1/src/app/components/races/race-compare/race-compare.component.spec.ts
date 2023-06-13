import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCompareComponent } from './race-compare.component';

describe('RaceCompareComponent', () => {
  let component: RaceCompareComponent;
  let fixture: ComponentFixture<RaceCompareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceCompareComponent]
    });
    fixture = TestBed.createComponent(RaceCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
