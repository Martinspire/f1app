import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { CircuitListComponent } from '../../components/circuits/circuit-list/circuit-list.component';
import { CircuitsFeatureComponent } from './circuits.component';

describe('CircuitsFeatureComponent', () => {
  let component: CircuitsFeatureComponent;
  let fixture: ComponentFixture<CircuitsFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CircuitsFeatureComponent, MockComponent(CircuitListComponent)]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
