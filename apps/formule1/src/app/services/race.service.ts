import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, first, map } from 'rxjs/operators';
import { ILap, ILapTimesData } from '../interfaces/laptimes';
import { IPitstop, IPitstopsData } from '../interfaces/pitstops';
import { IQualiData, IQualiItem } from '../interfaces/quali';
import { IRaceData, IRaceItem } from '../interfaces/race';
import { ISprintRaceData, ISprintRaceItem } from '../interfaces/sprint';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RaceService  extends ApiService {

  constructor(private http: HttpClient){
    super();
  }

  getRaceResult(year: string, raceNumber: string): Observable<IRaceItem> {
    return this.http
      .get<IRaceData>(this.apiURL + year + '/' + raceNumber + '/results.json')
      .pipe(
        first(),
        map((data) => {
          return data.MRData.RaceTable.Races[0];
        }),
        catchError(this.handleError)
      );
  }

  getSprintRaceResult(year: string, raceNumber: string): Observable<ISprintRaceItem> {
    return this.http
      .get<ISprintRaceData>(this.apiURL + year + '/' + raceNumber + '/sprint.json')
      .pipe(
        first(),
        map((data) => {
          return data.MRData.RaceTable.Races[0];
        }),
        catchError(this.handleError)
      );
  }

  getQualiRaceResult(year: string, raceNumber: string): Observable<IQualiItem> {
    return this.http
      .get<IQualiData>(this.apiURL + year + '/' + raceNumber + '/qualifying.json')
      .pipe(
        first(),
        map((data) => {
          return data.MRData.RaceTable.Races[0];
        }),
        catchError(this.handleError)
      );
  }

  getPitstopResult(year: string, raceNumber: string): Observable<IPitstop[]> {
    return this.http
      .get<IPitstopsData>(this.apiURL + year + '/' + raceNumber + '/pitstops.json')
      .pipe(
        first(),
        map((data) => {
          return data.MRData.RaceTable.Races[0].PitStops;
        }),
        catchError(this.handleError)
      );
  }

  getLapsResult(year: string, raceNumber: string): Observable<ILap[]> {
    return this.http
      .get<ILapTimesData>(this.apiURL + year + '/' + raceNumber + '/laps.json')
      .pipe(
        first(),
        map((data) => {
          return data.MRData.RaceTable.Races[0].Laps;
        }),
        catchError(this.handleError)
      );
  }
}
