import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitMapComponent } from './circuit-map.component';

describe('CircuitMapComponent', () => {
  let component: CircuitMapComponent;
  let fixture: ComponentFixture<CircuitMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeafletModule],
      declarations: [ CircuitMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
