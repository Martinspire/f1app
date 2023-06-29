import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { SeasonDetailComponent } from './../../components/seasons/season-detail/season-detail.component';

import { NextHomeComponent } from '../../components/next/next-home/next-home.component';
import { SeasonConstructorStandingsComponent } from '../../components/seasons/season-constructor-standings/season-constructor-standings.component';
import { SeasonDriverStandingsComponent } from '../../components/seasons/season-driver-standings/season-driver-standings.component';
import { HomeFeatureComponent } from './home.component';

describe('HomeFeatureComponent', () => {
  let component: HomeFeatureComponent;
  let fixture: ComponentFixture<HomeFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        HomeFeatureComponent,
        MockComponent(NextHomeComponent),
        MockComponent(SeasonDetailComponent),
        MockComponent(SeasonDriverStandingsComponent),
        MockComponent(SeasonConstructorStandingsComponent)
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
