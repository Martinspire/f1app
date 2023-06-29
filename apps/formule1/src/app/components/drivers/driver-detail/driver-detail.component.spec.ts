import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { DriverResultsComponent } from './../driver-results/driver-results.component';

import { MockProvider } from 'ng-mocks';
import { DriverService } from '../../../services/api/driver.service';
import { DriverDetailComponent } from './driver-detail.component';

describe('DriverDetailsComponent', () => {
  let component: DriverDetailComponent;
  let fixture: ComponentFixture<DriverDetailComponent>;
  const mockDriverService = MockProvider(DriverService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DriverDetailComponent, MockComponent(DriverResultsComponent)],
      providers: [mockDriverService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
