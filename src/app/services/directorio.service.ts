import { Injectable } from '@angular/core';
import { Directorio } from '../models/directorio';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirectorioService {

  ServerUrl = environment.baseUrl;
  errorData: {};

  private http: HttpClient;


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getDirectorios() {
    return this.http.get<Directorio>(this.ServerUrl + 'api/Directorios/').pipe(
      catchError(this.handleError)
    );
  }


  getDirectorio(id: number) {
    return this.http.get<Directorio>(this.ServerUrl + 'api/Directorio/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentDirectorios() {
    return this.http.get<Directorio>(this.ServerUrl + 'api/recent_Directorios/').pipe(
      catchError(this.handleError)
    );
  }

  buscarDirectorio( termino: string) {

    let url = this.ServerUrl + 'api/Directorios/buscar/' + termino;
    return this.http.get( url )
      .pipe(map((resp: any) => resp.directorios));

  }

  mostrarDirectorios( desde: number = 0 ) {
  
    let url = this.ServerUrl  + 'api/Directorios/medico?desde=' + desde;
    return this.http.get( url );

  }

  cargarDirectorio( id: string) {
    let url = this.ServerUrl + 'medico/' + id;
    return this.http.get(url)
    .pipe(map((resp: any) => resp.directorios));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
