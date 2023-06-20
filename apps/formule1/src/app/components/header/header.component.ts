import { Component } from '@angular/core';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'f1-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public dropdownOpen = false;

  constructor(private dialog: DialogService) {}

  async showAudioPlayer() {
    const {AudioPlayerComponent} = await import(
      './../audio-player/audio-player.component'
    );

    this.dialog.open(AudioPlayerComponent);
  }

  toggle() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  close() {
    this.dropdownOpen = false;
  }
}
