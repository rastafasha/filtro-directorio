import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { DirectorioComponent } from './pages/directorio/directorio.component';

// editor
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// pipe
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { OrderModule } from 'ngx-order-pipe';

// formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    DirectorioComponent,
    EscapeHtmlPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CKEditorModule,
    OrderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
