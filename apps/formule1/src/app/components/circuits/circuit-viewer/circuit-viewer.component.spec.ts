import { ThreeViewerComponent } from './../../three-viewer/three-viewer.component';
import { MockComponent } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitViewerComponent } from './circuit-viewer.component';

describe('CircuitViewerComponent', () => {
  let component: CircuitViewerComponent;
  let fixture: ComponentFixture<CircuitViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircuitViewerComponent, MockComponent(ThreeViewerComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
