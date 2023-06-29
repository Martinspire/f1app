import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ISeasonsItem } from '../../../interfaces/season';
import { SeasonService } from '../../../services/api/season.service';
import { SeasonsListComponent } from './seasons-list.component';

describe('SeasonsListComponent', () => {
  let component: SeasonsListComponent;
  let fixture: ComponentFixture<SeasonsListComponent>;
  const seasons: ISeasonsItem[] = [];
  const mockSeasonService = MockProvider(SeasonService, {
    getAllSeasons: () => of(seasons)
  });


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [SeasonsListComponent],
      providers: [mockSeasonService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
