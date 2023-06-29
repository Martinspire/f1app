import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZone } from '@angular/core';
import { NextCountdownComponent } from './next-countdown.component';

describe('NextCountdownComponent', () => {
  let component: NextCountdownComponent;
  let fixture: ComponentFixture<NextCountdownComponent>;
  let zone;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextCountdownComponent],
      providers: []
    })
      .compileComponents();

    zone = TestBed.inject(NgZone);
    jest.spyOn(zone, 'run').mockImplementation((fn) => fn());

    fixture = TestBed.createComponent(NextCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
