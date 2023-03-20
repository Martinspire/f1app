import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextCountdownComponent } from './next-countdown.component';

describe('NextCountdownComponent', () => {
  let component: NextCountdownComponent;
  let fixture: ComponentFixture<NextCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextCountdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
