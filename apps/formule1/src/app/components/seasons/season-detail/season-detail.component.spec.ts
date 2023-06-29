import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { SeasonMapComponent } from '../season-map/season-map.component';

import { MockProvider } from 'ng-mocks';
import { SeasonService } from '../../../services/api/season.service';
import { SeasonDetailComponent } from './season-detail.component';

describe('SeasonDetailComponent', () => {
  let component: SeasonDetailComponent;
  let fixture: ComponentFixture<SeasonDetailComponent>;
  const mockSeasonService = MockProvider(SeasonService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SeasonDetailComponent, MockComponent(SeasonMapComponent)],
      providers: [mockSeasonService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
