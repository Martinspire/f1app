import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { ApiService } from './api.service';
import { SeasonService } from './season.service';

describe('SeasonService', () => {
  let service: SeasonService;
  const mockApiService = MockProvider(ApiService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [mockApiService]
    });
    service = TestBed.inject(SeasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
