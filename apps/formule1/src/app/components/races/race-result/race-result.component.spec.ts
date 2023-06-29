import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { RaceService } from '../../../services/api/race.service';
import { RaceResultComponent } from './race-result.component';

describe('RaceResultComponent', () => {
  let component: RaceResultComponent;
  let fixture: ComponentFixture<RaceResultComponent>;
  const mockRaceService = MockProvider(RaceService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceResultComponent],
      providers: [mockRaceService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RaceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
