import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { SeasonService } from '../../../services/api/season.service';
import { SeasonConstructorStandingsComponent } from './season-constructor-standings.component';

describe('SeasonConstructorStandingsComponent', () => {
  let component: SeasonConstructorStandingsComponent;
  let fixture: ComponentFixture<SeasonConstructorStandingsComponent>;
  const mockSeasonService = MockProvider(SeasonService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SeasonConstructorStandingsComponent],
      providers: [mockSeasonService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonConstructorStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
