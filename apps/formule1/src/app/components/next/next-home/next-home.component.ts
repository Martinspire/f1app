import { Component, OnInit } from '@angular/core';
import { CountdownType } from '../../../constants/app.enums';
import { ISeasonRaceItem } from '../../../interfaces/season';
import { DateService } from '../../../services/date.service';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'f1-next-home',
  templateUrl: './next-home.component.html',
  styleUrls: ['./next-home.component.scss']
})
export class NextHomeComponent implements OnInit {

  public CountdownType = CountdownType;
  public showCountdown = false;
  public countToRaceDate !: Date;
  public haveRace = false;
  public haveUpcomingRace = false;
  public nextEvent!: ISeasonRaceItem;
  public previousEvent!: ISeasonRaceItem;

  constructor(
    private eventService: EventService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    if (this.eventService.haveData && this.eventService.nextEvent) {
      this.showCountdown = true;
      this.nextEvent = this.eventService.nextEvent;
      this.previousEvent = this.eventService.previousEvent;

      if (this.eventService.haveNextRace) {
        this.countToRaceDate = this.dateService.parseDateAndTime(this.nextEvent.date, this.nextEvent.time);
        this.haveRace = true;
      }
    }
  }
}
