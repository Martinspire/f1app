import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent, MockProvider } from 'ng-mocks';
import { CircuitMapComponent } from './../circuit-map/circuit-map.component';

import { CircuitService } from '../../../services/api/circuit.service';
import { CircuitViewerComponent } from '../circuit-viewer/circuit-viewer.component';
import { CircuitDetailComponent } from './circuit-detail.component';

describe('CircuitDetailsComponent', () => {
  let component: CircuitDetailComponent;
  let fixture: ComponentFixture<CircuitDetailComponent>;
  const mockCircuitService = MockProvider(CircuitService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CircuitDetailComponent, MockComponent(CircuitMapComponent), MockComponent(CircuitViewerComponent)],
      providers: [mockCircuitService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
