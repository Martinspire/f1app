import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';
import { DriverService } from '../../../services/api/driver.service';
import { DriverResultsComponent } from './driver-results.component';

describe('DriverResultsComponent', () => {
  let component: DriverResultsComponent;
  let fixture: ComponentFixture<DriverResultsComponent>;
  const mockDriverService = MockProvider(DriverService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DriverResultsComponent],
      providers: [mockDriverService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
