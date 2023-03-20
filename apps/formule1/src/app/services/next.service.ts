import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, first, map } from 'rxjs/operators';
import { IPlannedRaceData, IPlannedRaceItem } from '../interfaces/race';
import { ISeasonData, ISeasonRaceItem } from '../interfaces/season';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NextService  extends ApiService {

  constructor(private http: HttpClient){
    super();
  }

  getNextRace(): Observable<IPlannedRaceItem> {
    return this.http
      .get<IPlannedRaceData>(this.apiURL + 'current/next.json')
      .pipe(
        first(),
        map((data) => {
          if (!data?.MRData?.RaceTable?.Races[0]) {
            console.log('data not right', data);
            throw new Error('data not right');
          }
          return data.MRData.RaceTable.Races[0];
        }),
        catchError(this.handleError)
      );
  }

  getCurrentSeason(): Observable<ISeasonRaceItem> {
    return this.http
      .get<ISeasonData>(this.apiURL + 'current.json')
      .pipe(
        first(),
        map((data) => {
          if (!data?.MRData?.RaceTable?.Races[0]) {
            console.log('data not right', data);
            throw new Error('data not right');
          }
          return data.MRData.RaceTable.Races[0];
        }),
        catchError(this.handleError)
      );
  }
}
