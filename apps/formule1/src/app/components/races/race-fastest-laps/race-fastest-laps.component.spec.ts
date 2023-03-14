import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceFastestLapsComponent } from './race-fastest-laps.component';

describe('RaceFastestLapsComponent', () => {
  let component: RaceFastestLapsComponent;
  let fixture: ComponentFixture<RaceFastestLapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceFastestLapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceFastestLapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
