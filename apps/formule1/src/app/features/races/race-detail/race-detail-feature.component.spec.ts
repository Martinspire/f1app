import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceDetailFeatureComponent } from './race-detail-feature.component';

describe('RaceDetailComponent', () => {
  let component: RaceDetailFeatureComponent;
  let fixture: ComponentFixture<RaceDetailFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceDetailFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceDetailFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
