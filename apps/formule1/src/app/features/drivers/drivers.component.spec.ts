import { DriversListComponent } from './../../components/drivers/drivers-list/drivers-list.component';
import { MockComponent } from 'ng-mocks';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversFeatureComponent } from './drivers.component';

describe('DriversFeatureComponent', () => {
  let component: DriversFeatureComponent;
  let fixture: ComponentFixture<DriversFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversFeatureComponent, MockComponent(DriversListComponent) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
