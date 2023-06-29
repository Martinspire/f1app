import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { SeasonsListComponent } from './../../components/seasons/seasons-list/seasons-list.component';

import { SeasonsFeatureComponent } from './seasons.component';

describe('SeasonsFeatureComponent', () => {
  let component: SeasonsFeatureComponent;
  let fixture: ComponentFixture<SeasonsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasonsFeatureComponent, MockComponent(SeasonsListComponent)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
