import {ElementRef} from '@angular/core';

export interface ISong {
  id: string;
  name: string;
  icon: string;
  url: string;
  playing?: boolean;
  ref?: ElementRef<HTMLAudioElement>;
}
