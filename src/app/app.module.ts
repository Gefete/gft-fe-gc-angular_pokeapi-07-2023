import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compenents/home/home.component';
import { ListPokemonComponent } from './compenents/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './compenents/detail-pokemon/detail-pokemon.component';
import { AboutComponent } from './compenents/about/about.component';
import { NavbarComponent } from './util/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './compenents/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListPokemonComponent,
    DetailPokemonComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
