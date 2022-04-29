import {Component, OnInit} from '@angular/core';
import { ISeasonsItem } from '../../interfaces/season';
import { SeasonService } from '../../services/season.service';

@Component({
  selector: 'f1-feature-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeFeatureComponent implements OnInit {

  public seasons: ISeasonsItem[] = [];
  public lastSeason = '';

  constructor(private seasonService: SeasonService) { }

  ngOnInit(): void {
    this.getAllSeasons();
  }

  private getAllSeasons() {
    this.seasonService.getAllSeasons().subscribe((data: ISeasonsItem[]) => {
      console.log('seasons data', data);
      this.seasons = data;
      if (this.seasons && this.seasons.length > 0) {
        this.lastSeason = this.seasons[this.seasons.length - 1].season;
      }
    });
  }
}
