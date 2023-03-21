import { Component, OnInit } from '@angular/core';
import { ISeasonRaceItem } from '../../interfaces/season';
import { NextService } from '../../services/api/next.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'f1-feature-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeFeatureComponent implements OnInit {

  public currentSeason!: ISeasonRaceItem;
  public loading = false;

  constructor(
    private eventService: EventService,
    private nextService: NextService
  ) { }

  ngOnInit(): void {
    this.getCurrentSeason();
  }

  private getCurrentSeason() {
    this.loading = true;
    this.nextService.getCurrentSeason().subscribe((data: ISeasonRaceItem[]) => {
      console.log('current season data', data);
      this.currentSeason = data[0]; // get a race from season to display some information about
      this.loading = false;
      this.eventService.findProgress(data);
    });
  }
}
