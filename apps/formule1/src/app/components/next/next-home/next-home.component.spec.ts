import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponent, MockProvider } from 'ng-mocks';
import { DateFnsModule } from 'ngx-date-fns';
import { DateService } from '../../../services/date.service';
import { EventService } from '../../../services/event.service';
import { NextCountdownComponent } from '../next-countdown/next-countdown.component';
import { NextSessionsComponent } from '../next-sessions/next-sessions.component';
import { NextHomeComponent } from './next-home.component';

describe('NextHomeComponent', () => {
  let component: NextHomeComponent;
  let fixture: ComponentFixture<NextHomeComponent>;
  const mockEventService = MockProvider(EventService);
  const mockDateService = MockProvider(DateService);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextHomeComponent, MockComponent(NextCountdownComponent), MockComponent(NextSessionsComponent)],
      imports: [
        DateFnsModule.forRoot(),
      ],
      providers: [
        mockEventService,
        mockDateService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NextHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
