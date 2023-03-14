import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacePitstopsComponent } from './race-pitstops.component';

describe('RacePitstopsComponent', () => {
  let component: RacePitstopsComponent;
  let fixture: ComponentFixture<RacePitstopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacePitstopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacePitstopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
