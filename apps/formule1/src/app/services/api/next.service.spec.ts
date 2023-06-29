import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { ApiService } from './api.service';
import { NextService } from './next.service';

describe('NextService', () => {
  let service: NextService;
  const mockApiService = MockProvider(ApiService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [mockApiService]
    });
    service = TestBed.inject(NextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
