import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { SeasonService } from '../../../services/api/season.service';
import { SeasonDriverStandingsComponent } from './season-driver-standings.component';

describe('SeasonDriverStandingsComponent', () => {
  let component: SeasonDriverStandingsComponent;
  let fixture: ComponentFixture<SeasonDriverStandingsComponent>;
  const mockSeasonService = MockProvider(SeasonService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SeasonDriverStandingsComponent],
      providers: [mockSeasonService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDriverStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
