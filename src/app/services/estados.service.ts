import { Injectable } from '@angular/core';
import { Estados } from '../models/estados';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  ServerUrl = environment.baseUrl;
  errorData: {};

  private http: HttpClient;


  totalDirectorios: number = 0;

  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getEstados() {
    return this.http.get<Estados>(this.ServerUrl + 'api/Estados/');
  }


  getEstado(id: number) {
    return this.http.get<Estados>(this.ServerUrl + 'api/Estado/' + id);
  }


}
