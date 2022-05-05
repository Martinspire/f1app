import { Component, Input, OnChanges } from '@angular/core';
import { ISeasonRaceItem } from '../../../interfaces/season';
import { SeasonService } from '../../../services/season.service';

@Component({
  selector: 'f1-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.scss']
})
export class SeasonDetailComponent implements OnChanges {
  @Input() seasonId = '';

  public races: ISeasonRaceItem[] = [];

  public loading = false;

  constructor(private seasonService: SeasonService) { }

  ngOnChanges(): void {
    this.getSeasonParam();
  }

  private getSeasonParam() {
    if (this.seasonId && parseInt(this.seasonId)) {
      this.getSeason(parseInt(this.seasonId));
    }
  }

  private getSeason(seasonId: number) {
    this.loading = true;
    this.seasonService.getSeason(seasonId).subscribe((data: ISeasonRaceItem[]) => {
      console.log('season data', data);
      this.races = data;
      this.loading = false;
    });
  }
}
