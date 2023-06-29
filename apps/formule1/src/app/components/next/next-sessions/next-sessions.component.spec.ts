import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { DateFnsModule } from 'ngx-date-fns';
import { DateService } from '../../../services/date.service';
import { EventService } from '../../../services/event.service';
import { NextSessionsComponent } from './next-sessions.component';

describe('NextSessionsComponent', () => {
  let component: NextSessionsComponent;
  let fixture: ComponentFixture<NextSessionsComponent>;
  const mockEventService = MockProvider(EventService);
  const mockDateService = MockProvider(DateService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextSessionsComponent],
      imports: [
        DateFnsModule.forRoot(),
      ],
      providers: [
        mockEventService,
        mockDateService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NextSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
