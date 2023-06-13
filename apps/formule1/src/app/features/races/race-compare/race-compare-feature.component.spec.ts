import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCompareFeatureComponent } from './race-compare-feature.component';

describe('RaceCompareFeatureComponent', () => {
  let component: RaceCompareFeatureComponent;
  let fixture: ComponentFixture<RaceCompareFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceCompareFeatureComponent]
    });
    fixture = TestBed.createComponent(RaceCompareFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
