import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceQualiResultComponent } from './race-quali-result.component';

describe('RaceQualiResultComponent', () => {
  let component: RaceQualiResultComponent;
  let fixture: ComponentFixture<RaceQualiResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceQualiResultComponent ]
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
