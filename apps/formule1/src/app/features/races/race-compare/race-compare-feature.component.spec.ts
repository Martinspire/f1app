import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponent } from 'ng-mocks';
import { RaceCompareComponent } from '../../../components/races/race-compare/race-compare.component';
import { RaceCompareFeatureComponent } from './race-compare-feature.component';

describe('RaceCompareFeatureComponent', () => {
  let component: RaceCompareFeatureComponent;
  let fixture: ComponentFixture<RaceCompareFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RaceCompareFeatureComponent,
        MockComponent(RaceCompareComponent),
      ]
    });
    fixture = TestBed.createComponent(RaceCompareFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
