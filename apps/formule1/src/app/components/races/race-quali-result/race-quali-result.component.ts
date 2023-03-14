import { Component, Input, OnChanges } from '@angular/core';
import { IQualiItem } from '../../../interfaces/quali';
import { RaceService } from '../../../services/race.service';

@Component({
  selector: 'f1-race-quali-result',
  templateUrl: './race-quali-result.component.html',
  styleUrls: ['./race-quali-result.component.scss']
})
export class RaceQualiResultComponent implements OnChanges {
  @Input() round !: string;
  @Input() season !: string;

  public qualiResults!: IQualiItem;

  public loading = false;
  public haveQ2 = false;
  public haveQ3 = false;

  constructor(private raceService: RaceService) { }

  ngOnChanges(): void {
    this.getQualiParams();
  }

  private getQualiParams() {
    if (this.round && this.season) {
      this.getQuali(this.season, this.round);
    }
  }

  private getQuali(season: string, round: string) {
    this.loading = true;
    this.raceService.getQualiRaceResult(season, round).subscribe((data: IQualiItem) => {
      console.log('quali data', data);
      this.qualiResults = data;
      if (this.qualiResults.QualifyingResults[0].Q2) {
        this.haveQ2 = true;
      }
      if (this.qualiResults.QualifyingResults[0].Q3) {
        this.haveQ3 = true;
      }
      this.loading = false;
    });
  }
}
