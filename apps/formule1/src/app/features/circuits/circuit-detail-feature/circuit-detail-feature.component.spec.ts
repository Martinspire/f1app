import { CircuitDetailComponent } from './../../../components/circuits/circuit-detail/circuit-detail.component';
import { MockComponent } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CircuitDetailFeatureComponent } from './circuit-detail-feature.component';

describe('CircuitDetailFeatureComponent', () => {
  let component: CircuitDetailFeatureComponent;
  let fixture: ComponentFixture<CircuitDetailFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ CircuitDetailFeatureComponent, MockComponent(CircuitDetailComponent) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitDetailFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
