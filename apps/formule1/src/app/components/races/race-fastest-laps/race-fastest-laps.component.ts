import { Component, Input, OnChanges } from '@angular/core';
import { ILap } from '../../../interfaces/laptimes';
import { RaceService } from '../../../services/api/race.service';

@Component({
  selector: 'f1-race-fastest-laps',
  templateUrl: './race-fastest-laps.component.html',
  styleUrls: ['./race-fastest-laps.component.scss']
})
export class RaceFastestLapsComponent implements OnChanges {
  @Input() round !: string;
  @Input() season !: string;

  public laps: ILap[] = [];

  public loading = false;
  public error = false;

  constructor(private raceService: RaceService) { }

  ngOnChanges(): void {
    this.getLapsParams();
  }

  private getLapsParams() {
    if (this.round && this.season) {
      this.getLaps(this.season, this.round);
    }
  }

  private getLaps(season: string, round: string) {
    this.loading = true;
    this.raceService.getLapsResult(season, round).subscribe({
      next: (data: ILap[]) => {
        console.log('laps data', data);
        this.laps = data;
        this.loading = false;
      },
      error: (error) => {
        console.log('error', error);
        this.error = true;
        this.loading = false;
      }
    });
  }
}
