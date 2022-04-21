import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {catchError, first, map} from 'rxjs/operators';
import {IDriver, IDriverData} from '../interfaces/driver';
import {ApiService} from './api.service';

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
      .pipe(first(), catchError(this.handleError))
      .pipe(map((data) => {
        return data.MRData.DriverTable.Drivers;
      }));
  }
}
