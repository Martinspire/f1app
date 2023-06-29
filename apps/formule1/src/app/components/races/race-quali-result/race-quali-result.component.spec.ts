import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { RaceService } from '../../../services/api/race.service';
import { RaceQualiResultComponent } from './race-quali-result.component';

describe('RaceQualiResultComponent', () => {
  let component: RaceQualiResultComponent;
  let fixture: ComponentFixture<RaceQualiResultComponent>;
  const mockRaceService = MockProvider(RaceService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceQualiResultComponent],
      providers: [mockRaceService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RaceQualiResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
