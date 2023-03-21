import { Component, Input, OnChanges } from '@angular/core';
import { IPitstop } from '../../../interfaces/pitstops';
import { RaceService } from '../../../services/api/race.service';

@Component({
  selector: 'f1-race-pitstops',
  templateUrl: './race-pitstops.component.html',
  styleUrls: ['./race-pitstops.component.scss']
})
export class RacePitstopsComponent implements OnChanges {
  @Input() round !: string;
  @Input() season !: string;

  public pitstops: IPitstop[] = [];

  public loading = false;
  public error = false;

  constructor(private raceService: RaceService) { }

  ngOnChanges(): void {
    this.getPitstopsParams();
  }

  private getPitstopsParams() {
    if (this.round && this.season) {
      this.getPitstops(this.season, this.round);
    }
  }

  private getPitstops(season: string, round: string) {
    this.loading = true;
    this.raceService.getPitstopResult(season, round).subscribe({
      next: (data: IPitstop[]) => {
        console.log('pitstops data', data);
        this.pitstops = data;
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
