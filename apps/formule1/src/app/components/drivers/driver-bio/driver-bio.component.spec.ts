import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverBioComponent } from './driver-bio.component';

describe('DriverBioComponent', () => {
  let component: DriverBioComponent;
  let fixture: ComponentFixture<DriverBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
