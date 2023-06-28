import { Component, OnInit } from '@angular/core';
import { CountdownType } from '../../../constants/app.enums';
import { ISeasonRaceItem } from '../../../interfaces/season';
import { DateService } from '../../../services/date.service';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'f1-next-sessions',
  templateUrl: './next-sessions.component.html',
  styleUrls: ['./next-sessions.component.scss']
})
export class NextSessionsComponent implements OnInit {

  public CountdownType = CountdownType;
  public showCountdown = false;
  public countToRaceDate !: Date;
  public countToQualiDate !: Date;
  public countToSprintRaceDate !: Date;
  public countToFp1Date !: Date;
  public countToFp2Date !: Date;
  public countToFp3Date !: Date;
  public haveRace = false;
  public haveQuali = false;
  public haveSprint = false;
  public haveFp1 = false;
  public haveFp2 = false;
  public haveFp3 = false;
  public haveUpcomingRace = false;
  public haveUpcomingQuali = false;
  public haveUpcomingSprint = false;
  public haveUpcomingFp1 = false;
  public haveUpcomingFp2 = false;
  public haveUpcomingFp3 = false;
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
      if (this.eventService.haveNextQuali && this.nextEvent.Qualifying) {
        this.countToQualiDate = this.dateService.parseDateAndTime(this.nextEvent.Qualifying.date, this.nextEvent.Qualifying.time);
        this.haveQuali = true;
        this.haveUpcomingQuali = this.dateService.isAfterDateString(this.nextEvent.Qualifying.date, this.eventService.todayDateString);
      }
      if (this.eventService.haveNextSprint && this.nextEvent.Sprint) {
        this.countToSprintRaceDate = this.dateService.parseDateAndTime(this.nextEvent.Sprint.date, this.nextEvent.Sprint.time);
        this.haveSprint = true;
        this.haveUpcomingSprint = this.dateService.isAfterDateString(this.nextEvent.Sprint.date, this.eventService.todayDateString);
      }
      if (this.eventService.haveNextFp1 && this.nextEvent.FirstPractice) {
        this.countToFp1Date = this.dateService.parseDateAndTime(this.nextEvent.FirstPractice.date, this.nextEvent.FirstPractice.time);
        this.haveFp1 = true;
        this.haveUpcomingFp1 = this.dateService.isAfterDateString(this.nextEvent.FirstPractice.date, this.eventService.todayDateString);
      }
      if (this.eventService.haveNextFp2 && this.nextEvent.SecondPractice) {
        this.countToFp2Date = this.dateService.parseDateAndTime(this.nextEvent.SecondPractice.date, this.nextEvent.SecondPractice.time);
        this.haveFp2 = true;
        this.haveUpcomingFp2 = this.dateService.isAfterDateString(this.nextEvent.SecondPractice.date, this.eventService.todayDateString);
      }
      if (this.eventService.haveNextFp3 && this.nextEvent.ThirdPractice) {
        this.countToFp3Date = this.dateService.parseDateAndTime(this.nextEvent.ThirdPractice.date, this.nextEvent.ThirdPractice.time);
        this.haveFp3 = true;
        this.haveUpcomingFp3 = this.dateService.isAfterDateString(this.nextEvent.ThirdPractice.date, this.eventService.todayDateString);
      }
    }
  }
}
