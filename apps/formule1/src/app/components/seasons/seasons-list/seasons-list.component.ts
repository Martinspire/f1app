import { Component, OnInit } from '@angular/core';
import { ISeasonsItem } from '../../../interfaces/season';
import { SeasonService } from '../../../services/api/season.service';

@Component({
  selector: 'f1-seasons-list',
  templateUrl: './seasons-list.component.html',
  styleUrls: ['./seasons-list.component.scss']
})
export class SeasonsListComponent implements OnInit {

  public seasons: ISeasonsItem[] = [];
  public filteredSeasons: ISeasonsItem[] = [];

  public seasonFilter = '';

  public loading = false;

  constructor(private seasonService: SeasonService) { }

  ngOnInit(): void {
    this.getAllSeasons();
  }

  private getAllSeasons() {
    this.loading = true;
    this.seasonService.getAllSeasons().subscribe((data: ISeasonsItem[]) => {
      console.log('seasons data', data);
      const reversedSeasons = Array.from(data).reverse();
      this.seasons = reversedSeasons;
      this.applyFilters();
      this.loading = false;
    });
  }

  public applyFilters() {
    this.filteredSeasons = this.seasons.filter(season => {
      if (
        season &&
        season.season.toLowerCase().indexOf(this.seasonFilter.toLowerCase()) > -1
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  public resetFilters() {
    this.seasonFilter = '';
  }
}
