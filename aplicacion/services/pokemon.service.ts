import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeAPI } from '../../interfaces/pokemon.interfaces';
import { Observable } from 'rxjs';
  
 /**
 * Servicio para interactuar con la API de Pokémon y mi backend en Node.js.
 * Proporciona métodos para obtener información de la Api de Pokémon y registrar usuarios en una base de datos MySQL.
 */

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  /** URL de la API de Pokémon */
  private urlEndPoint: string = 'https://pokeapi.co/api/v2/pokemon/';

  /** URL del backend en Node.js */
  private apiUrl = 'http://localhost:3000/aphi/datos'; 

   /**
   * Constructor del servicio.
   * @param http Cliente HTTP para realizar solicitudes a la API.
   */
  constructor(private http: HttpClient) {}

    /**
   * Obtiene una lista de Pokémon desde la API.
   * @param limit Número máximo de Pokémon a obtener.
   * @param offset Número de Pokémon a omitir desde el inicio.
   * @returns Un observable con la lista de Pokémon.
   */
  
  getPokemons(limit: number = 1000, offset: number = 0): Observable<PokeAPI> {
    return this.http.get<PokeAPI>(`${this.urlEndPoint}?limit=${limit}&offset=${offset}`);
  }

   /**
   * Obtiene los detalles de un Pokémon específico.
   * @param name Nombre del Pokémon a obtener.
   * @returns Un observable con los detalles del Pokémon.
   */
  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}${name}`);
  }

  /**
   * Registra un usuario en la base de datos MySQL a través del backend en Node.js.
   * @param usuario Datos del usuario a registrar.
   * @returns Un observable con la respuesta del servidor.
   */

  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro`, usuario);
  }
}
