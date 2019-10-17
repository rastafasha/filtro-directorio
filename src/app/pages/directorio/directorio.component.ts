import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../services/directorio.service';
import { Directorio } from '../../models/directorio';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { Especialidades } from '../../models/especialidades';
import { EspecialidadService } from '../../services/especialidades.service';
import { Estados } from '../../models/estados';
import { EstadosService } from '../../services/estados.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {

  directorios: Directorio;
  especialidades:Especialidades;
  estados: Estados;

  error: string;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  p: Number = 1;
  count: Number = 5;


  constructor(
    public directorioService: DirectorioService,
    public especialidadService: EspecialidadService,
    public estadoService: EstadosService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {

    this.directorioService.getDirectorios().subscribe(
      (data: Directorio) => this.directorios = data,
      error => this.error = error
    );

   
    this.cargarEspecialidades();

    this.cargarEstados();
    
  }

  cargarDirectorios( ){
    

  }

  

  cargarEspecialidades( ){
    this.especialidadService.getEspecialidades().subscribe(
      (data: Especialidades) => this.especialidades = data,
      error => this.error = error
    );
    // console.log(this.especialidadService)
  }

  cargarEstados(){
    this.estadoService.getEstados().subscribe(
      (data: Especialidades) => this.estados = data,
      error => this.error = error
    );
    // console.log(this.estadoService)
  }

  buscarDirectorio( termino: string) {

    console.log(termino);
    /*if (termino.length <= 0) {
      this.cargarDirectorios();
      return;
    }*/

    this.directorioService.buscarDirectorio( termino )
      .subscribe( directorios => this.directorios = directorios);


  }



  
  
  

}
