import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';
import { ISeasonData } from '../interfaces/season';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SeasonService extends ApiService {

  constructor(private http: HttpClient){
    super();
  }

  getSeason(year: number): Observable<ISeasonData> {
    return this.http
      .get<ISeasonData>(this.apiURL + year + '.json')
      .pipe(retry(1), catchError(this.handleError));
  }
}
