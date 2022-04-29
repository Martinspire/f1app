import { DriverDetailComponent } from './../../../components/drivers/driver-detail/driver-detail.component';
import { MockComponent } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DriverDetailFeatureComponent } from './driver-detail-feature.component';

describe('DriverDetailFeatureComponent', () => {
  let component: DriverDetailFeatureComponent;
  let fixture: ComponentFixture<DriverDetailFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ DriverDetailFeatureComponent, MockComponent(DriverDetailComponent) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDetailFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
