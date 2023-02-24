import { Component } from '@angular/core';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'f1-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public dropdownOpen = false;

  constructor(private modalService: ModalService<AudioPlayerComponent>) {}

  async showAudioPlayer(): Promise<void> {
    const {AudioPlayerComponent} = await import(
      './../audio-player/audio-player.component'
    );

    await this.modalService.open(AudioPlayerComponent);
  }

  toggle() {
    this.dropdownOpen = !this.dropdownOpen;
    console.log(this.dropdownOpen);
  }

  close() {
    this.dropdownOpen = false;
    console.log(this.dropdownOpen);
  }
}
