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
  public upcomingEvent!: ISeasonRaceItem;
  public pastEvent!: ISeasonRaceItem;

  constructor(
    private eventService: EventService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    if (this.eventService.haveData) {
      if (this.eventService.currentEvent && this.eventService.isCurrentUpcoming) {
        this.showCountdown = true;
        this.upcomingEvent = this.eventService.currentEvent;
        this.pastEvent = this.eventService.previousEvent;
      } else if (this.eventService.nextEvent) {
        this.showCountdown = true;
        this.upcomingEvent = this.eventService.nextEvent;
        this.pastEvent = this.eventService.currentEvent;
      }

      if (this.upcomingEvent) {
        if (this.eventService.haveNextRace) {
          this.countToRaceDate = this.dateService.parseDateAndTime(this.upcomingEvent.date, this.upcomingEvent.time);
          this.haveRace = true;
        }
        if (this.eventService.haveNextQuali && this.upcomingEvent.Qualifying) {
          this.countToQualiDate = this.dateService.parseDateAndTime(this.upcomingEvent.Qualifying.date, this.upcomingEvent.Qualifying.time);
          this.haveQuali = true;
        }
        if (this.eventService.haveNextSprint && this.upcomingEvent.Sprint) {
          this.countToSprintRaceDate = this.dateService.parseDateAndTime(this.upcomingEvent.Sprint.date, this.upcomingEvent.Sprint.time);
          this.haveSprint = true;
        }
        if (this.eventService.haveNextFp1 && this.upcomingEvent.FirstPractice) {
          this.countToFp1Date = this.dateService.parseDateAndTime(this.upcomingEvent.FirstPractice.date, this.upcomingEvent.FirstPractice.time);
          this.haveFp1 = true;
        }
        if (this.eventService.haveNextFp2 && this.upcomingEvent.SecondPractice) {
          this.countToFp2Date = this.dateService.parseDateAndTime(this.upcomingEvent.SecondPractice.date, this.upcomingEvent.SecondPractice.time);
          this.haveFp2 = true;
        }
        if (this.eventService.haveNextFp3 && this.upcomingEvent.ThirdPractice) {
          this.countToFp3Date = this.dateService.parseDateAndTime(this.upcomingEvent.ThirdPractice.date, this.upcomingEvent.ThirdPractice.time);
          this.haveFp3 = true;
        }
      }
    }
  }
}
