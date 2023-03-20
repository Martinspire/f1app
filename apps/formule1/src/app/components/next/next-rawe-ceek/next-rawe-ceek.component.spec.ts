import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextRaweCeekComponent } from './next-rawe-ceek.component';

describe('NextRaweCeekComponent', () => {
  let component: NextRaweCeekComponent;
  let fixture: ComponentFixture<NextRaweCeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextRaweCeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextRaweCeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
