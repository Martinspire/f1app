import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NextSessionsComponent } from './next-sessions.component';

describe('NextSessionsComponent', () => {
  let component: NextSessionsComponent;
  let fixture: ComponentFixture<NextSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextSessionsComponent]
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
