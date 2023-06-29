import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { RaceService } from '../../../services/api/race.service';
import { RaceSprintResultComponent } from './race-sprint-result.component';

describe('RaceSprintResultComponent', () => {
  let component: RaceSprintResultComponent;
  let fixture: ComponentFixture<RaceSprintResultComponent>;
  const mockRaceService = MockProvider(RaceService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceSprintResultComponent],
      providers: [mockRaceService]
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
