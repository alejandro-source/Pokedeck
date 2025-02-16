import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../..//services/pokemon.service'; 

/**
 * Componente para mostrar el catálogo de Pokémons.
 * Permite la búsqueda, paginación y podemos ver los detalles de un Pokémon seleccionado.
 */

@Component({
  selector: 'app-catalogo-de-pokemons',
  standalone: false,
  templateUrl: './catalogo-de-pokemons.component.html',
  styleUrls: ['./catalogo-de-pokemons.component.css']
})


export class CatalogoDePokemonsComponent implements OnInit {

  /** Lista de todos los Pokémons obtenidos de la API. */
  pokemons: any[] = []; 

  /** Lista filtrada de Pokémons según la búsqueda del usuario. */
  filteredPokemons: any[] = []; 

  /** Lista de Pokémons en la pagina en la que estemos. */
  paginatedPokemons: any[] = [];

  /** Si seleccionamos un Pokémon mostraremos más detalles de dicho Pokémon seleccionado. */
  selectedPokemon: any = null;

  /** Término de búsqueda introducido por el usuario. */
  searchTerm: string = '';

  /** Número de Pokémons que se mostrarán por página. */
  itemsPerPage: number = 50; 
  
  /** Página actual en la que nos encontramos. */
  currentPage: number = 0;    

   /**
   * Inyectamos el servicio.
   * @param service Servicio para obtener datos de Pokémons.
   */

  constructor(private service: ServiceService) {} 


  /**
   * Método de inicialización del componente.
   * Se ejecuta cuando el componente es cargado.
   */

  ngOnInit(): void {
    this.loadPokemons();
  }


  /**
   * Carga la lista de Pokémons desde el servicio.
   */

  loadPokemons(): void {
    this.service.getPokemons(1000).subscribe((response: any) => {
      this.pokemons = response.results.map((pokemon: any, index: number) => ({
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
      }));
      this.filteredPokemons = [...this.pokemons];
      this.updatePagination(); 
    })
  }

   /**
   * Filtra la lista de Pokémons según el término de búsqueda.
   */

  filterPokemons(): void {
    const term = this.searchTerm.toLowerCase();
    if (term.length > 0) {
      this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name.includes(term));
    } else {
      this.filteredPokemons = [...this.pokemons];
    }
    this.currentPage = 0; 
    this.updatePagination();
  }

   /**
   * Actualiza la lista paginada de Pokémons.
   */
  updatePagination(): void {
    const startIndex = this.currentPage * this.itemsPerPage;
    this.paginatedPokemons = this.filteredPokemons.slice(startIndex, startIndex + this.itemsPerPage);
  }

    /**
    * Muestra la página anterior de Pokémons.
    */
  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagination();
    }
  }

    /**
    * Muestra la página siguiente de Pokémons.
    */
  nextPage(): void {
    if (this.hasMorePokemons()) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  /**
   * Verifica si hay más Pokémons disponibles para paginar.
   * @returns `true` si hay más Pokémons, `false` en caso contrario.
   */
  hasMorePokemons(): boolean {
    return (this.currentPage + 1) * this.itemsPerPage < this.filteredPokemons.length;
  }

    /**
    * Obtiene los detalles de un Pokémon seleccionado.
    * @param name Nombre del Pokémon seleccionado.
    */
  selectPokemon(name: string): void {
    this.service.getPokemonDetails(name).subscribe((response: any) => {
      this.selectedPokemon = response;
    });
  }

    /**
    * Deselecciona el Pokémon actualmente seleccionado.
    */
  deselectPokemon(): void {
    this.selectedPokemon = null;
  }
}
