import { Component, Input, OnChanges } from '@angular/core';
import { IConstructorStandingItem } from '../../../interfaces/standings';
import { SeasonService } from '../../../services/season.service';

@Component({
  selector: 'f1-season-constructor-standings',
  templateUrl: './season-constructor-standings.component.html',
  styleUrls: ['./season-constructor-standings.component.scss']
})
export class SeasonConstructorStandingsComponent implements OnChanges {
  @Input() seasonId = '';

  public constructorStandings: IConstructorStandingItem[] = [];

  public loading = false;

  constructor(private seasonService: SeasonService) { }

  ngOnChanges(): void {
    this.getSeasonParam();
  }

  private getSeasonParam() {
    if (this.seasonId && parseInt(this.seasonId)) {
      this.getConstructorStandings(parseInt(this.seasonId));
    }
  }

  private getConstructorStandings(seasonId: number) {
    this.loading = true;
    this.seasonService.getSeasonConstructorStandings(seasonId).subscribe((data: IConstructorStandingItem[]) => {
      console.log('season data', data);
      this.constructorStandings = data;
      this.loading = false;
    });
  }
}
