import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AppConstant } from '../../constants/app.constants';
import { ISong } from '../../interfaces/audio';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'f1-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements AfterViewInit {

  @ViewChildren('songElements') songElements!: QueryList<ElementRef<HTMLAudioElement>>;
  public songs: ISong[] = [];

  constructor(private modalService: ModalService<AudioPlayerComponent>) {
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

  public togglePlayback(song: ISong) {
    if (song.ref?.nativeElement.paused) {
      song.ref.nativeElement.play();
      song.playing = true;
    } else {
      song.ref?.nativeElement.pause();
      song.playing = false;
    }
  }

  public close() {
    this.modalService.close();
  }
}
