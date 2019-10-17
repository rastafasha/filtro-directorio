import { Injectable } from '@angular/core';
import { Especialidades } from '../models/especialidades';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  ServerUrl = environment.baseUrl;
  errorData: {};

  private http: HttpClient;


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getEspecialidades() {
    return this.http.get<Especialidades>(this.ServerUrl + 'api/Especialidades');
  }


  getEspecialidad(id: number) {
    return this.http.get<Especialidades>(this.ServerUrl + 'api/Especialidad/' + id);
  }


}
