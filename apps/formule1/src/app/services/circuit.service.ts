import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';
import { ICircuitData } from '../interfaces/circuit';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CircuitService  extends ApiService {

  constructor(private http: HttpClient){
    super();
  }

  getCircuits(): Observable<ICircuitData> {
    return this.http
      .get<ICircuitData>(this.apiURL + 'circuits.json?limit=1000')
      .pipe(retry(1), catchError(this.handleError));
  }

  getCircuit(circuit: string): Observable<ICircuitData> {
    return this.http
      .get<ICircuitData>(this.apiURL + 'circuits/' + circuit + '.json')
      .pipe(retry(1), catchError(this.handleError));
  }
}
