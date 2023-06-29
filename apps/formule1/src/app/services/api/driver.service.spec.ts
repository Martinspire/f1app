import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { ApiService } from './api.service';
import { DriverService } from './driver.service';

describe('DriverService', () => {
  let service: DriverService;
  const mockApiService = MockProvider(ApiService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [mockApiService]
    });
    service = TestBed.inject(DriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
