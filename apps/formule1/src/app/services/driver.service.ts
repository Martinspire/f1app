import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';
import { IDriverData } from '../interfaces/driver';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService extends ApiService {

  constructor(private http: HttpClient) {
    super();
  }

  getAllDrivers(): Observable<IDriverData> {
    return this.http
      .get<IDriverData>(this.apiURL + 'drivers.json?limit=1000')
      .pipe(retry(1), catchError(this.handleError));
  }
}
