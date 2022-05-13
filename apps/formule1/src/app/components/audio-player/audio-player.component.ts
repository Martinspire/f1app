import { Component, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import {AppConstant} from '../../constants/app.constants';
import {ISong} from '../../interfaces/audio';

@Component({
  selector: 'f1-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements AfterViewInit {

  @ViewChildren('songElements') songElements!: QueryList<ElementRef<HTMLAudioElement>>;
  public songs: ISong[] = [];
  public showSongs = false;

  constructor() {
    //
    this.songs = AppConstant.songs;
  }

  ngAfterViewInit(): void {
    const elements = this.songElements.toArray();
    this.songs.forEach((song: ISong, index: number) => {
      song.playing = false;
      const element = elements[index];
      song.ref = element;
    });
  }

  public toggleSongs() {
    this.showSongs = !this.showSongs;
  }

  public togglePlayback(song: ISong) {
    if (song.ref?.nativeElement.paused) {
      song.ref.nativeElement.play();
      song.playing = true;
    } else {
      song.ref?.nativeElement.pause();
      song.playing = false;
    }
  }
}
