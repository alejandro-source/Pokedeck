import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './aplicacion/pages/home/home.component';
import { CatalogoDePokemonsComponent } from './aplicacion/components/pokedex/catalogo-de-pokemons.component';
import { RegistrarseComponent } from './shared/register/registrarse.component';
import { NewsComponent } from './aplicacion/components/news/news.component';
import { EventsComponent } from './aplicacion/components/events/events.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'pokedex', component: CatalogoDePokemonsComponent },
  { path: 'news', component: NewsComponent }, 
  { path: 'events', component: EventsComponent },  
  { path: 'register', component: RegistrarseComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: '**', redirectTo: '' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
