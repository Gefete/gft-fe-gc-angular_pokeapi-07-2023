import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compenents/home/home.component';
import { ListPokemonComponent } from './compenents/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './compenents/detail-pokemon/detail-pokemon.component';
import { AboutComponent } from './compenents/about/about.component';
import { NotFoundComponent } from './compenents/not-found/not-found.component';

const routes: Routes = [
  {path:"", redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListPokemonComponent },
  { path: 'detail', component: DetailPokemonComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
