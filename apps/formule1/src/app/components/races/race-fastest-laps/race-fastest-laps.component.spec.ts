import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { RaceService } from '../../../services/api/race.service';
import { RaceFastestLapsComponent } from './race-fastest-laps.component';

describe('RaceFastestLapsComponent', () => {
  let component: RaceFastestLapsComponent;
  let fixture: ComponentFixture<RaceFastestLapsComponent>;
  const mockRaceService = MockProvider(RaceService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceFastestLapsComponent],
      providers: [mockRaceService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RaceFastestLapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
