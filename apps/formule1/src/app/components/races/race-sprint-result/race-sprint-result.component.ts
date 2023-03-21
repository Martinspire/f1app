import { Component, Input, OnChanges } from '@angular/core';
import { ISprintRaceItem } from '../../../interfaces/sprint';
import { RaceService } from '../../../services/api/race.service';

@Component({
  selector: 'f1-race-sprint-result',
  templateUrl: './race-sprint-result.component.html',
  styleUrls: ['./race-sprint-result.component.scss']
})
export class RaceSprintResultComponent implements OnChanges {
  @Input() round !: string;
  @Input() season !: string;

  public sprintResults!: ISprintRaceItem;

  public loading = false;
  public error = false;

  constructor(private raceService: RaceService) { }

  ngOnChanges(): void {
    this.getSprintParams();
  }

  private getSprintParams() {
    if (this.round && this.season) {
      this.getSprint(this.season, this.round);
    }
  }

  private getSprint(season: string, round: string) {
    this.loading = true;
    this.raceService.getSprintRaceResult(season, round).subscribe({
      next: (data: ISprintRaceItem) => {
        console.log('sprint data', data);
        this.sprintResults = data;
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
