import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectorioComponent } from './pages/directorio/directorio.component'



const routes: Routes = [
  {path: '', component: DirectorioComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
