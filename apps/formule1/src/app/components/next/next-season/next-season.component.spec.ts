import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSeasonComponent } from './next-season.component';

describe('NextSeasonComponent', () => {
  let component: NextSeasonComponent;
  let fixture: ComponentFixture<NextSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextSeasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
