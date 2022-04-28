import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, first, map } from 'rxjs/operators';
import { ICircuitData, ICircuitItem } from '../interfaces/circuit';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CircuitService  extends ApiService {

  constructor(private http: HttpClient){
    super();
  }

  getAllCircuits(): Observable<ICircuitItem[]> {
    return this.http
      .get<ICircuitData>(this.apiURL + 'circuits.json?limit=1000')
      .pipe(
        first(),
        map((data) => {
          return data.MRData.CircuitTable.Circuits;
        }),
        catchError(this.handleError)
      );
  }

  getCircuit(circuit: string): Observable<ICircuitItem> {
    return this.http
      .get<ICircuitData>(this.apiURL + 'circuits/' + circuit + '.json')
      .pipe(
        first(),
        map((data) => {
          return data.MRData.CircuitTable.Circuits[0];
        }),
        catchError(this.handleError)
      );
  }
}
