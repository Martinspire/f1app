import { Component, Input, OnChanges } from '@angular/core';
import { IRaceItem } from '../../../interfaces/race';
import { IWikiResult } from '../../../interfaces/wiki';
import { WikiService } from '../../../services/wiki.service';

@Component({
  selector: 'f1-race-bio',
  templateUrl: './race-bio.component.html',
  styleUrls: ['./race-bio.component.scss']
})
export class RaceBioComponent implements OnChanges {
  @Input() race!: IRaceItem;
  @Input() round!: string;
  @Input() season!: string;

  public image!: IWikiResult;
  public summary = '';

  public loadingImage = false;
  public loadingSummary = false;

  constructor(private wikiService: WikiService) { }

  ngOnChanges(): void {
    this.getRaceBio();
  }

  private getRaceBio() {
    if (this.race) {
      this.getRaceImage(this.race);
      this.getRaceSummary(this.race);
    }
  }

  private getRaceImage(race: IRaceItem) {
    this.loadingImage = true;
    const wikiUrlSplit = race.url.split('/');
    const wikiName = wikiUrlSplit[wikiUrlSplit.length - 1]; // lets hope this is consistent in the api
    this.wikiService.getWikiImage(wikiName).subscribe(data => {
      if (data && data.thumbnail && data.thumbnail.source) {
        this.image = data;
      }
      this.loadingImage = false;
    });
  }

  private getRaceSummary(race: IRaceItem) {
    this.loadingSummary = true;


    const wikiUrlSplit = race.url.split('/');
    const wikiName = wikiUrlSplit[wikiUrlSplit.length - 1]; // lets hope this is consistent in the api
    this.wikiService.getWikiSummary(wikiName).subscribe(data => {
      if (data && data.extract) {
        this.summary = data.extract;
      }
      this.loadingSummary = false;
    });
  }
}
