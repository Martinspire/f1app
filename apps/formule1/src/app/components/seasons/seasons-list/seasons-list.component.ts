import { Component, OnInit } from '@angular/core';
import { ISeasonsItem } from '../../../interfaces/season';
import { SeasonService } from '../../../services/season.service';

@Component({
  selector: 'f1-seasons-list',
  templateUrl: './seasons-list.component.html',
  styleUrls: ['./seasons-list.component.scss']
})
export class SeasonsListComponent implements OnInit {

  public seasons: ISeasonsItem[] = [];

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
      this.loading = false;
    });
  }
}
