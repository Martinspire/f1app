import {Component, Input, OnChanges} from '@angular/core';
import {IDriver} from '../../../interfaces/driver';
import {WikiService} from '../../../services/wiki.service';
import {IWikiResult} from '../../../interfaces/wiki';

@Component({
  selector: 'f1-driver-bio',
  templateUrl: './driver-bio.component.html',
  styleUrls: ['./driver-bio.component.scss']
})
export class DriverBioComponent implements OnChanges {
  @Input() driver!: IDriver;

  public image!: IWikiResult;
  public summary = '';

  public loadingImage = false;
  public loadingSummary = false;

  constructor(private wikiService: WikiService) { }

  ngOnChanges(): void {
    this.getDriverBio();
  }

  private getDriverBio() {
    if (this.driver) {
      this.getDriverImage(this.driver);
      this.getDriverSummary(this.driver);
    }
  }

  private getDriverImage(driver: IDriver) {
    this.loadingImage = true;
    const wikiUrlSplit = driver.url.split('/');
    const wikiName = wikiUrlSplit[wikiUrlSplit.length - 1]; // lets hope this is consistent in the api
    this.wikiService.getWikiImage(wikiName).subscribe(data => {
      if (data && data.thumbnail && data.thumbnail.source) {
        this.image = data;
      }
      this.loadingImage = false;
    });
  }

  private getDriverSummary(driver: IDriver) {
    this.loadingSummary = true;


    const wikiUrlSplit = driver.url.split('/');
    const wikiName = wikiUrlSplit[wikiUrlSplit.length - 1]; // lets hope this is consistent in the api
    this.wikiService.getWikiSummary(wikiName).subscribe(data => {
      if (data && data.extract) {
        this.summary = data.extract;
      }
      this.loadingSummary = false;
    });
  }
}
