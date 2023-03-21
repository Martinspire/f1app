import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppConstant } from '../../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Define API
  public apiURL = AppConstant.apiURL;

  // Http Options
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Error handling, disabling checking for any type since I don't know what errors this API will give
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error && error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else if (error && error.status && error.message) {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    } else {
      errorMessage = String(error);
    }
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
}
