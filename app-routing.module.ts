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
  { path: 'pokedex', component: CatalogoDePokemonsComponent}, // Ruta protegida
  { path: 'news', component: NewsComponent }, // Ruta protegida
  { path: 'events', component: EventsComponent}, // Ruta protegida
  { path: 'register', component: RegistrarseComponent}, // Esta no está protegida, el usuario puede acceder sin token
  { path: 'login', component: LoginComponent }, // Esta tampoco está protegida, permite el acceso si el usuario no tiene token
  { path: '**', redirectTo: '' }, // Redirige a Home si la ruta no es encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
