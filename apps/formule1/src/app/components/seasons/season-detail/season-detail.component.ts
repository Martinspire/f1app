import { Component, Input, OnChanges } from '@angular/core';
import { IRaceItem } from '../../../interfaces/season';
import { SeasonService } from '../../../services/season.service';

@Component({
  selector: 'f1-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.scss']
})
export class SeasonDetailComponent implements OnChanges {
  @Input() seasonId = '';

  public races: IRaceItem[] = [];

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
    this.seasonService.getSeason(seasonId).subscribe((data: IRaceItem[]) => {
      console.log('season data', data);
      this.races = data;
    });
  }
}
