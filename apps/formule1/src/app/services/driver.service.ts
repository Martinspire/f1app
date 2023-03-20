import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, first, map } from 'rxjs/operators';
import { IDriver, IDriverData } from '../interfaces/driver';
import { IRaceData, IRaceItem } from './../interfaces/race';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService extends ApiService {

  constructor(private http: HttpClient) {
    super();
  }

  getAllDrivers(): Observable<IDriver[]> {
    return this.http
      .get<IDriverData>(this.apiURL + 'drivers.json?limit=1000')
      .pipe(
        first(),
        map((data) => {
          if (!data?.MRData?.DriverTable?.Drivers) {
            console.log('data not right', data);
            throw new Error('data not right');
          }
          return data.MRData.DriverTable.Drivers;
        }),
        catchError(this.handleError)
      );
  }

  getDriver(driver: string): Observable<IDriver> {
    return this.http
      .get<IDriverData>(this.apiURL + 'drivers/' + driver + '.json')
      .pipe(
        first(),
          map((data) => {
            if (!data?.MRData?.DriverTable?.Drivers[0]) {
              console.log('data not right', data);
              throw new Error('data not right');
            }
            return data.MRData.DriverTable.Drivers[0];
        }),
        catchError(this.handleError));
  }

  getDriverStandings(driver: string): Observable<IDriver> {
    return this.http
      .get<IDriverData>(this.apiURL + 'drivers/' + driver + '/driverStandings.json')
      .pipe(first(),
        map((data) => {
            if (!data?.MRData?.DriverTable?.Drivers[0]) {
              console.log('data not right', data);
              throw new Error('data not right');
            }
            return data.MRData.DriverTable.Drivers[0];
        }),
        catchError(this.handleError)
      );
  }

  getDriverResults(driver: string): Observable<IRaceItem[]> {
    return this.http
      .get<IRaceData>(this.apiURL + 'drivers/' + driver + '/results.json?limit=1000') // right now 500-ish is the record so should be fine for now
      .pipe(first(),
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
}
