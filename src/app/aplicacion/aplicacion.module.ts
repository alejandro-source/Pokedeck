import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoDePokemonsComponent } from './components/pokedex/catalogo-de-pokemons.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NewsComponent } from './components/news/news.component';
import { EventsComponent } from './components/events/events.component';



@NgModule({
  declarations: [
    HomeComponent,
    CatalogoDePokemonsComponent,
    NewsComponent,
    EventsComponent,

  ],
  imports: [
    CommonModule, 
    SharedModule,
    FormsModule,

],
  exports: [
    HomeComponent
  ]
})
export class AplicacionModule { }
