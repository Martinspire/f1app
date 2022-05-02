import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonMapComponent } from './season-map.component';

describe('SeasonMapComponent', () => {
  let component: SeasonMapComponent;
  let fixture: ComponentFixture<SeasonMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeafletModule],
      declarations: [ SeasonMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
