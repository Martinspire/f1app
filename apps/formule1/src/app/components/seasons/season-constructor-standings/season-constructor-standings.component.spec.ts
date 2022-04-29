import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonConstructorStandingsComponent } from './season-constructor-standings.component';

describe('SeasonConstructorStandingsComponent', () => {
  let component: SeasonConstructorStandingsComponent;
  let fixture: ComponentFixture<SeasonConstructorStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ SeasonConstructorStandingsComponent ]
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
