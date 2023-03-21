import { Injectable } from '@angular/core';
import { SessionNames } from '../constants/app.enums';
import { ISeasonRaceItem } from '../interfaces/season';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public haveData = false;
  public races: ISeasonRaceItem[] = [];
  public isFutureSeason = false;
  public isInProgressSeason = false;
  public isPastSeason = false;
  public isRaceweek = false;
  public isCurrentUpcoming = false;
  public nextSession: SessionNames = SessionNames.None;
  public previousSession: SessionNames = SessionNames.None;
  public currentSession: SessionNames = SessionNames.None;
  public closestToSession: SessionNames = SessionNames.None;
  public nextEvent!: ISeasonRaceItem;
  public previousEvent!: ISeasonRaceItem;
  public currentEvent!: ISeasonRaceItem;
  public closestToEvent!: ISeasonRaceItem;
  public previousDuration!: Duration;
  public closestDuration!: Duration;
  public currentDuration!: Duration;
  public nextDuration!: Duration;
  public seasonIndex = 0;
  public haveNextSprint = false;
  public haveNextFp1 = false;
  public haveNextFp2 = false;
  public haveNextFp3 = false;
  public haveNextQuali = false;
  public haveNextRace = false;
  public showFp1Results = false;
  public showFp2Results = false;
  public showFp3Results = false;
  public showQualiResults = false;
  public showSprintResults = false;
  public showRaceResults = false;
  public showPreviousResults = false;
  public today = new Date();
  public todayDateString = '';

  constructor(
    private dateService: DateService
  ) {
    this.todayDateString = this.dateService.formatDateReverse(this.today);
  }

  public reset() {
    this.haveData = false;
    this.races = [];
    this.isFutureSeason = false;
    this.isInProgressSeason = false;
    this.isPastSeason = false;
    this.isRaceweek = false;
    this.nextSession = SessionNames.None;
    this.previousSession = SessionNames.None;
    this.currentSession = SessionNames.None;
    this.closestToSession = SessionNames.None;
    // this.nextEvent = undefined;
    // this.previousEvent = undefined;
    // this.currentEvent = undefined;
    // this.closestToEvent = undefined;
    // this.previousDuration = undefined;
    // this.closestDuration = undefined;
    // this.nextDuration = undefined;
    this.seasonIndex = 0;
    this.haveNextSprint = false;
    this.haveNextFp1 = false;
    this.haveNextFp2 = false;
    this.haveNextFp3 = false;
    this.haveNextQuali = false;
    this.haveNextRace = false;
    this.showFp1Results = false;
    this.showFp2Results = false;
    this.showFp3Results = false;
    this.showQualiResults = false;
    this.showSprintResults = false;
    this.showRaceResults = false;
    this.showPreviousResults = false;
    this.today = new Date();
    this.todayDateString = this.dateService.formatDateReverse(this.today);
  }

  public findProgress(races: ISeasonRaceItem[]) {
    this.races = races;
    this.findSeasonProgress();
    this.findRaceInSeasonProgress();
    this.findRaceProgress();

    this.haveData = true;
  }

  private findSeasonProgress() {
    if (this.races.length > 0) {
      let startDate, startTime;
      if (this.races[0]?.date) {
        startDate = this.races[0]?.date;
        startTime = this.races[0]?.time;
      }
      let endDate, endTime;
      if (this.races[this.races.length -1]?.date) {
        endDate = this.races[this.races.length -1]?.date;
        endTime = this.races[this.races.length -1]?.time;
      }
      if (this.dateService.isFutureDateAndTimeString(startDate, startTime)) {
        this.isFutureSeason = true;
      } else if (this.dateService.isPastDateAndTimeString(endDate, endTime)) {
        this.isPastSeason = true;
      } else {
        this.isInProgressSeason = true;
      }
    }
  }

  /*
    * get closest race by dates
    * this helps by getting not just the next race but also what is close
    * and whether it makes sense to display previous race stats or not
    */
  private findRaceInSeasonProgress() {
    const raceDates = this.races.map(race => race.date);
    let closest = this.dateService.isClosestIndexOfDateStrings(this.today, raceDates);
    if (!closest) {
      closest = 0;
    }

    const closestRace = this.races[closest];
    this.closestToEvent = closestRace;
    if (this.dateService.isBeforeDateString(closestRace.date, this.todayDateString)) {
      this.seasonIndex = closest;

      if ((closest -1) > -1) {
        this.previousEvent = this.races[closest -1];
      }
      this.currentEvent = this.races[closest];

      this.nextEvent = this.races[closest +1];
    } else if (this.dateService.isAfterDateString(closestRace.date, this.todayDateString)) {
      this.seasonIndex = closest + 1;
      this.isCurrentUpcoming = true;

      this.previousEvent = this.races[closest];
      if ((closest +1) < this.races.length) {
        this.currentEvent = this.races[closest +1];
      }

      if ((closest +2) < this.races.length) {
        this.nextEvent = this.races[closest +2];
      }
      if (this.dateService.differenceInSecondsDate(this.today, this.dateService.parseDateAndTime(this.previousEvent.date, this.previousEvent.time)) < (60 * 60 * 24 * 3)) {
        this.showPreviousResults = true;
      }
    }
    if (this.previousEvent) {
      const previousDate = this.dateService.parseDateAndTime(this.previousEvent.date, this.previousEvent.time);
      this.previousDuration = this.dateService.intervalToDurationDate(this.today, previousDate);
    }
    if (this.closestToEvent) {
      const closestDate = this.dateService.parseDateAndTime(this.closestToEvent.date, this.closestToEvent.time);
      this.closestDuration = this.dateService.intervalToDurationDate(this.today, closestDate);
    }
    if (this.nextEvent) {
      const nextDate = this.dateService.parseDateAndTime(this.nextEvent.date, this.nextEvent.time);
      this.nextDuration = this.dateService.intervalToDurationDate(this.today, nextDate);
    }
    if (this.currentEvent) {
      const currentDate = this.dateService.parseDateAndTime(this.currentEvent.date, this.currentEvent.time);
      this.currentDuration = this.dateService.intervalToDurationDate(this.today, currentDate);
    }
  }

  /*
   * find what part of the race weekend we are in and what to count down to
   */
  private findRaceProgress() {
    const nextDate = this.dateService.parseDateAndTime(this.nextEvent.date, this.nextEvent.time);
    const raceDifference = this.dateService.differenceInSecondsDate(this.today, nextDate);
    if (raceDifference > 0  && raceDifference < (60 * 60 * 24 * 7)) {
      this.isRaceweek = true;
    }

    const sessions: Date[] = [];
    const sessionNames: SessionNames[] = [];
    if (this.nextEvent.FirstPractice && this.nextEvent.FirstPractice.date) {
      this.haveNextFp1 = true;
      this.processSession(sessions, sessionNames, SessionNames.FirstPractice, this.showFp1Results, this.nextEvent);
    }
    if (this.nextEvent.SecondPractice && this.nextEvent.SecondPractice.date) {
      this.haveNextFp2 = true;
      this.processSession(sessions, sessionNames, SessionNames.SecondPractice, this.showFp2Results, this.nextEvent);
    }
    if (this.nextEvent.ThirdPractice && this.nextEvent.ThirdPractice.date) {
      this.haveNextFp3 = true;
      this.processSession(sessions, sessionNames, SessionNames.ThirdPractice, this.showFp3Results, this.nextEvent);
    }
    if (this.nextEvent.Qualifying && this.nextEvent.Qualifying.date) {
      this.haveNextQuali = true;
      this.processSession(sessions, sessionNames, SessionNames.Qualifying, this.showQualiResults, this.nextEvent);
    }
    if (this.nextEvent.Sprint && this.nextEvent.Sprint.date) {
      this.haveNextSprint = true;
      this.processSession(sessions, sessionNames, SessionNames.Sprint, this.showSprintResults, this.nextEvent);
    }
    if (this.nextEvent.date && this.nextEvent.time) {
      this.haveNextRace = true;
      this.processSession(sessions, sessionNames, SessionNames.Race, this.showRaceResults, this.nextEvent);
    }

    let closest = this.dateService.isClosestIndex(this.today, sessions);
    if (!closest) {
      closest = 0;
    }
    this.closestToSession = sessionNames[closest];
  }

  processSession(sessions: Date[], sessionNames: SessionNames[], sessionName: SessionNames, sessionResults: boolean, raceEvent: ISeasonRaceItem) {
    if (sessionName !== SessionNames.None) {
      let session, sessionTime;
      if (sessionName !== SessionNames.Race && raceEvent[sessionName]) {
        session = raceEvent[sessionName];
        sessionTime = this.dateService.parseDateAndTime(session?.date, session?.time);
      } else {
        session = raceEvent;
        sessionTime = this.dateService.parseDateAndTime(raceEvent.date, raceEvent.time);
      }
      sessions.push(sessionTime);
      sessionNames.push(sessionName);
      const isPast = this.dateService.isPastDate(sessionTime);
      const isFuture = this.dateService.isFutureDate(sessionTime);
      const difference = this.dateService.differenceInSecondsDate(this.today, sessionTime);
      if (isPast) {
        this.previousSession = sessionName;
      } else if (isFuture) {
        this.nextSession = sessionName;
      }
      if (difference > -(60 * 60 * 2) && difference < (60 * 60 * 2)) {
        this.currentSession = sessionName;
      }
      if ((sessionName === SessionNames.Race || sessionName === SessionNames.Qualifying || sessionName === SessionNames.Sprint) && difference > 0 && difference < (60 * 60 * 24)) {
        sessionResults = true;
      } else if (difference > 0 && difference < (60 * 60 * 2)) {
        sessionResults = true;
      }
    }
  }
}
