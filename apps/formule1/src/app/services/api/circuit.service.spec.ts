import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { ApiService } from './api.service';
import { CircuitService } from './circuit.service';

describe('CircuitService', () => {
  let service: CircuitService;
  const mockApiService = MockProvider(ApiService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [mockApiService]
    });
    service = TestBed.inject(CircuitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
