import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { RaceService } from '../../../services/api/race.service';
import { RaceCompareComponent } from './race-compare.component';

describe('RaceCompareComponent', () => {
  let component: RaceCompareComponent;
  let fixture: ComponentFixture<RaceCompareComponent>;
  const mockRaceService = MockProvider(RaceService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaceCompareComponent],
      providers: [mockRaceService]
    });
    fixture = TestBed.createComponent(RaceCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
