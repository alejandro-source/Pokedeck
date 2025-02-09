import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeAPI } from '../../interfaces/pokemon.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private urlEndPoint: string = 'https://pokeapi.co/api/v2/pokemon/';
  private apiUrl = 'http://localhost:3000/aphi/datos'; // URL del backend en Node.js

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de Pokémon
  getPokemons(limit: number = 1000, offset: number = 0): Observable<PokeAPI> {
    return this.http.get<PokeAPI>(`${this.urlEndPoint}?limit=${limit}&offset=${offset}`);
  }

  // Método para obtener detalles de un Pokémon
  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}${name}`);
  }

  // Método para registrar usuarios en la base de datos MySQL
  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuario);
  }
}
