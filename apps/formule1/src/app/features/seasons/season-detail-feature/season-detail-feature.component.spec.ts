import { SeasonConstructorStandingsComponent } from './../../../components/seasons/season-constructor-standings/season-constructor-standings.component';
import { SeasonDriverStandingsComponent } from './../../../components/seasons/season-driver-standings/season-driver-standings.component';
import { SeasonDetailComponent } from './../../../components/seasons/season-detail/season-detail.component';
import { MockComponent } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SeasonDetailFeatureComponent } from './season-detail-feature.component';

describe('SeasonDetailFeatureComponent', () => {
  let component: SeasonDetailFeatureComponent;
  let fixture: ComponentFixture<SeasonDetailFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [
        SeasonDetailFeatureComponent,
        MockComponent(SeasonDetailComponent),
        MockComponent(SeasonDriverStandingsComponent),
        MockComponent(SeasonConstructorStandingsComponent)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDetailFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
