import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, first, map } from 'rxjs/operators';
import { ISeasonData, ISeasonRaceItem, ISeasonsData, ISeasonsItem } from '../../interfaces/season';
import { IConstructorStandingItem, IConstructorStandingsData, IDriverStandingItem, IDriverStandingsData } from '../../interfaces/standings';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SeasonService extends ApiService {

  constructor(private http: HttpClient){
    super();
  }

  getAllSeasons(): Observable<ISeasonsItem[]> {
    return this.http
      .get<ISeasonsData>(this.apiURL + 'seasons.json?limit=1000')
      .pipe(
        first(),
        map((data) => {
          if (!data?.MRData?.SeasonTable?.Seasons) {
            console.log('data not right', data);
            throw new Error('data not right');
          }
          return data.MRData.SeasonTable.Seasons;
        }),
        catchError(this.handleError)
      );
  }

  getSeason(year: number): Observable<ISeasonRaceItem[]> {
    return this.http
      .get<ISeasonData>(this.apiURL + year + '.json')
      .pipe(
        first(),
        map((data) => {
          if (!data?.MRData?.RaceTable?.Races) {
            console.log('data not right', data);
            throw new Error('data not right');
          }
          return data.MRData.RaceTable.Races;
        }),
        catchError(this.handleError)
      );
  }

  getSeasonDriverStandings(year: number): Observable<IDriverStandingItem[]> {
    return this.http
      .get<IDriverStandingsData>(this.apiURL + year + '/driverStandings.json')
      .pipe(
        first(),
        map((data) => {
          if (!data?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings) {
            console.log('data not right', data);
            throw new Error('data not right');
          }
          return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        }),
        catchError(this.handleError)
      );
  }

  getSeasonConstructorStandings(year: number): Observable<IConstructorStandingItem[]> {
    return this.http
      .get<IConstructorStandingsData>(this.apiURL + year + '/constructorStandings.json')
      .pipe(
        first(),
        map((data) => {
          if (!data?.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings) {
            console.log('data not right', data);
            throw new Error('data not right');
          }
          return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        }),
        catchError(this.handleError)
      );
  }
}
