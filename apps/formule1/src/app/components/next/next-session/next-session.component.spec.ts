import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSessionComponent } from './next-session.component';

describe('NextSessionComponent', () => {
  let component: NextSessionComponent;
  let fixture: ComponentFixture<NextSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
