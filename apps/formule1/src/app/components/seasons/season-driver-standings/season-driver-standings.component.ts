import { Component, Input, OnChanges } from '@angular/core';
import { SeasonService } from '../../../services/api/season.service';
import { IDriverStandingItem } from './../../../interfaces/standings';

@Component({
  selector: 'f1-season-driver-standings',
  templateUrl: './season-driver-standings.component.html',
  styleUrls: ['./season-driver-standings.component.scss']
})
export class SeasonDriverStandingsComponent implements OnChanges {
  @Input() seasonId = '';

  public driverStandings: IDriverStandingItem[] = [];

  public loading = false;

  constructor(private seasonService: SeasonService) { }

  ngOnChanges(): void {
    this.getSeasonParam();
  }

  private getSeasonParam() {
    if (this.seasonId && parseInt(this.seasonId)) {
      this.getDriverStandings(parseInt(this.seasonId));
    }
  }

  private getDriverStandings(seasonId: number) {
    this.loading = true;
    this.seasonService.getSeasonDriverStandings(seasonId).subscribe((data: IDriverStandingItem[]) => {
      console.log('driver standings data', data);
      this.driverStandings = data;
      this.loading = false;
    });
  }
}
