import { Component, Input, OnChanges } from '@angular/core';
import { IRaceItem } from '../../../interfaces/race';
import { RaceService } from '../../../services/race.service';

@Component({
  selector: 'f1-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.scss']
})
export class RaceDetailComponent implements OnChanges{
  @Input() season = '';
  @Input() round = '';

  public race!: IRaceItem;

  public loading = false;

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
    this.loading = true;
    this.raceService.getRaceResult(season, round).subscribe((data: IRaceItem) => {
      console.log('race data', data);
      this.race = data;
      this.loading = false;
    });
  }
}
