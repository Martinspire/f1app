import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, first, map } from 'rxjs/operators';
import { IConstructor, IConstructorData } from '../../interfaces/constructor';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConstructorService extends ApiService {

  constructor(private http: HttpClient){
    super();
  }

  getConstructors(): Observable<IConstructor[]> {
    return this.http
      .get<IConstructorData>(this.apiURL + 'constructors.json?limit=1000')
      .pipe(
        first(),
        map((data) => {
          if (!data?.MRData?.ConstructorTable?.Constructors) {
            console.log('data not right', data);
            throw new Error('data not right');
          }
          return data.MRData.ConstructorTable.Constructors;
        }),
        catchError(this.handleError)
      );
  }

  getConstructor(constructor: string): Observable<IConstructor[]> {
    return this.http
      .get<IConstructorData>(this.apiURL + 'constructors/' + constructor + '.json')
      .pipe(
        first(),
        map((data) => {
          if (!data?.MRData?.ConstructorTable?.Constructors) {
            console.log('data not right', data);
            throw new Error('data not right');
          }
          return data.MRData.ConstructorTable.Constructors;
        }),
        catchError(this.handleError)
      );
  }

  getConstructorStandings(constructor: string): Observable<IConstructor[]> {
    return this.http
      .get<IConstructorData>(this.apiURL + 'constructors/' + constructor + 'constructorStandings.json')
      .pipe(
        first(),
        map((data) => {
          if (!data?.MRData?.ConstructorTable?.Constructors) {
            console.log('data not right', data);
            throw new Error('data not right');
          }
          return data.MRData.ConstructorTable.Constructors;
        }),
        catchError(this.handleError)
      );
  }
}
