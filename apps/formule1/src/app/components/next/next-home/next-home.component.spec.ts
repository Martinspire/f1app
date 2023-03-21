import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextHomeComponent } from './next-home.component';

describe('NextHomeComponent', () => {
  let component: NextHomeComponent;
  let fixture: ComponentFixture<NextHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
