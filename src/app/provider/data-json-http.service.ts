import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {  HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://tunisiacarnival.com/wp-json/tribe/events/v1/events';
@Injectable({
  providedIn: 'root'
})


export class DataJsonHTTPService {
  data: string;
  
  constructor(private http: HttpClient, private storage: Storage) { 
  
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getDataUser(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getDetails(ids) {
    let zd ="http://tunisiacarnival.com/wp-json/tribe/events/v1/events/"+ids;
    return this.http.get(zd).pipe(
      map(this.extractData),
      catchError(this.handleError));;
  }
}