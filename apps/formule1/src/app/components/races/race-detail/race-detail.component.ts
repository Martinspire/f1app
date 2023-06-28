import { Component, Input, OnChanges } from '@angular/core';
import { IPlannedRaceItem, IRaceItem } from '../../../interfaces/race';
import { RaceService } from '../../../services/api/race.service';

@Component({
  selector: 'f1-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.scss']
})
export class RaceDetailComponent implements OnChanges {
  @Input() season = '';
  @Input() round = '';

  public race!: IRaceItem;
  public plannedRace!: IPlannedRaceItem;
  public today = new Date();

  public loading = false;
  public error = false;

  constructor(private raceService: RaceService) { }

  ngOnChanges(): void {
    this.getRaceParams();
  }

  private getRaceParams() {
    if (this.season && this.round) {
      this.getRace(this.season, this.round);
    }
  }

  private getRace(season: string, round: string) {
    this.error = false;
    this.loading = true;
    this.raceService.getRaceResult(season, round).subscribe({
      next: (data: IRaceItem) => {
        console.log('race data', data);
        this.race = data;
        this.loading = false;
      },
      error: (error) => {
        console.log('error', error);
        this.error = true;
        this.loading = false;
        // try getting planned race to see if we get data there
        this.getPlannedRace(season, round);
      }
    });
  }

  private getPlannedRace(season: string, round: string) {
    this.error = false;
    this.loading = true;
    this.raceService.getPlannedRace(season, round).subscribe({
      next: (data: IPlannedRaceItem) => {
        console.log('plannedRace data', data);
        this.plannedRace = data;
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
