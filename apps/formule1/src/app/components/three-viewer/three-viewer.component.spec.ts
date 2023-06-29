import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Renderer2 } from '@angular/core';
import { ThreeViewerComponent } from './three-viewer.component';

describe('ThreeViewerComponent', () => {
  let component: ThreeViewerComponent;
  let fixture: ComponentFixture<ThreeViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ThreeViewerComponent
      ],
      providers: [
        Renderer2
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ThreeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // will be difficult to test with threejs testing being a bit flaky and giving lots of errors
});
