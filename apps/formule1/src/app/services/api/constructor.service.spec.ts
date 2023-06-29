import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { ApiService } from './api.service';
import { ConstructorService } from './constructor.service';


describe('ConstructorService', () => {
  let service: ConstructorService;
  const mockApiService = MockProvider(ApiService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [mockApiService]
    });
    service = TestBed.inject(ConstructorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
