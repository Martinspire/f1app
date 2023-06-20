import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';
import { AppConstant } from '../../constants/app.constants';
import { ISong } from '../../interfaces/audio';

/**
 * Audio player for hype songs
 * currently it uses a separate audio player for each song. Might switch that up later.
 */
@Component({
  selector: 'f1-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements AfterViewInit {
  @ViewChildren('songElements') songElements!: QueryList<ElementRef<HTMLAudioElement>>;
  public songs: ISong[] = [];

  constructor(public ref: DialogRef) {
    this.songs = AppConstant.songs;
  }

  ngAfterViewInit(): void {
    // bind songs and elements
    const elements = this.songElements.toArray();
    this.songs.forEach((song: ISong, index: number) => {
      song.playing = false;
      const element = elements[index];
      song.ref = element;
    });
  }

  public togglePlayback(song: ISong) {
    // pause other songs
    this.songs.forEach(item => {
      if (item.id !== song.id) {
        item.ref?.nativeElement.pause();
        item.playing = false;
      }
    });
    // switch selected song
    if (song.ref?.nativeElement.paused) {
      song.ref.nativeElement.play();
      song.playing = true;
    } else {
      song.ref?.nativeElement.pause();
      song.playing = false;
    }
  }

  public close() {
    this.ref.close();
  }
}
