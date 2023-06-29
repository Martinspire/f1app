import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { RaceService } from '../../../services/api/race.service';
import { RaceDetailComponent } from './race-detail.component';

describe('RaceDetailComponent', () => {
  let component: RaceDetailComponent;
  let fixture: ComponentFixture<RaceDetailComponent>;
  const mockRaceService = MockProvider(RaceService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceDetailComponent],
      providers: [mockRaceService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RaceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
