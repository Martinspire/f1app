import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, first, map } from 'rxjs/operators';
import { IRaceItem, ISeasonData, ISeasonsData, ISeasonsItem } from '../interfaces/season';
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
      .get<ISeasonsData>(this.apiURL + 'seasons.json')
      .pipe(
        first(),
        map((data) => {
          return data.MRData.SeasonTable.Seasons;
        }),
        catchError(this.handleError)
      );
  }

  getSeason(year: number): Observable<IRaceItem[]> {
    return this.http
      .get<ISeasonData>(this.apiURL + year + '.json')
      .pipe(
        first(),
        map((data) => {
          return data.MRData.RaceTable.Races;
        }),
        catchError(this.handleError)
      );
  }
}
