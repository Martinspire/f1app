import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {IWikiQuery, IWikiResult} from '../interfaces/wiki';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError, first, map} from 'rxjs/operators';
import { AppConstant } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class WikiService extends ApiService {

  constructor(private http: HttpClient) {
    super();
  }

  getWikiImage(query: string): Observable<IWikiResult> {
    return this.http
      .get<IWikiQuery>(AppConstant.wikiImageUrl + query)
      .pipe(
        first(),
        map((data) => {
          return Object.values(data.query.pages)[0];
        }),
        catchError(this.handleError)
      );
  }

  getWikiSummary(query: string): Observable<IWikiResult> {
    return this.http
      .get<IWikiQuery>(AppConstant.wikiSummaryUrl + query)
      .pipe(
        first(),
        map((data) => {
          return Object.values(data.query.pages)[0];
        }),
        catchError(this.handleError)
      );
  }
}
