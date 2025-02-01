import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeAPI } from '../../interfaces/pokemon.interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private urlEndPoint:string = 'https://pokeapi.co/api/v2/pokemon/';
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http:HttpClient) { }

  // Metodo para obetener la lista de Pokemon´
  getPokemons(limit: number = 500, offset: number = 0): Observable<PokeAPI> {
    return this.http.get<PokeAPI>(`${this.urlEndPoint}?limit=${limit}&offset=${offset}`);
  }
  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${name}`);
  }  
}
