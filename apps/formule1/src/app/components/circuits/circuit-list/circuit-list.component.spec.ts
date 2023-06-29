import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ICircuitItem } from '../../../interfaces/circuit';
import { CircuitService } from '../../../services/api/circuit.service';
import { CircuitListComponent } from './circuit-list.component';

describe('CircuitListComponent', () => {
  let component: CircuitListComponent;
  let fixture: ComponentFixture<CircuitListComponent>;
  const circuits: ICircuitItem[] = [];
  const mockCircuitService = MockProvider(CircuitService, {
    getAllCircuits: () => of(circuits)
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [CircuitListComponent],
      providers: [mockCircuitService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
