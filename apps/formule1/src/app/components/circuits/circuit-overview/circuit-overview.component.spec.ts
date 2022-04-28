import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitOverviewComponent } from './circuit-overview.component';

describe('CircuitOverviewComponent', () => {
  let component: CircuitOverviewComponent;
  let fixture: ComponentFixture<CircuitOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
