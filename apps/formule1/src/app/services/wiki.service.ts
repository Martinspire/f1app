import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {IWikiQuery, IWikiResult} from '../interfaces/wiki';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError, first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WikiService extends ApiService {

  // dont forget &origin=* to get around CORS
  private wikiImageUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&origin=*&format=json&pithumbsize=400&titles=';
  private wikiSummaryUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&redirects=1&titles=';

  constructor(private http: HttpClient) {
    super();
  }

  getWikiImage(query: string): Observable<IWikiResult> {
    return this.http
      .get<IWikiQuery>(this.wikiImageUrl + query)
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
      .get<IWikiQuery>(this.wikiSummaryUrl + query)
      .pipe(
        first(),
        map((data) => {
          return Object.values(data.query.pages)[0];
        }),
        catchError(this.handleError)
      );
  }
}
