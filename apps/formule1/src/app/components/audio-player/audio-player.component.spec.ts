import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRef } from '@ngneat/dialog';
import { mockProvider } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { ModalComponent } from '../modal/modal.component';
import { AudioPlayerComponent } from './audio-player.component';

describe('AudioPlayerComponent', () => {
  let component: AudioPlayerComponent;
  let fixture: ComponentFixture<AudioPlayerComponent>;
  const mockDialogRef = mockProvider(DialogRef);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudioPlayerComponent, MockComponent(ModalComponent)],
      providers: [mockDialogRef]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
