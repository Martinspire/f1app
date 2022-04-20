import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';
import { IConstructorData } from '../interfaces/constructor';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConstructorService extends ApiService {

  constructor(private http: HttpClient){
    super();
  }

  getConstructors(): Observable<IConstructorData> {
    return this.http
      .get<IConstructorData>(this.apiURL + 'constructors.json?limit=1000')
      .pipe(retry(1), catchError(this.handleError));
  }

  getConstructor(constructor: string): Observable<IConstructorData> {
    return this.http
      .get<IConstructorData>(this.apiURL + 'constructors/' + constructor + '.json')
      .pipe(retry(1), catchError(this.handleError));
  }
}
