import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../..//services/pokemon.service'; 

@Component({
  selector: 'app-catalogo-de-pokemons',
  standalone: false,
  templateUrl: './catalogo-de-pokemons.component.html',
  styleUrls: ['./catalogo-de-pokemons.component.css']
})
export class CatalogoDePokemonsComponent implements OnInit {
  pokemons: any[] = []; 
  filteredPokemons: any[] = []; 
  paginatedPokemons: any[] = []; 
  selectedPokemon: any = null;
  searchTerm: string = '';

  itemsPerPage: number = 50; 
  currentPage: number = 0;    

  constructor(private service: ServiceService) {} 

  ngOnInit(): void {
    this.loadPokemons();
  }

  // Cargar los Pokémon usando el servicio
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

  // Filtrar los Pokémon por el término de búsqueda
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

  // Actualizar la lista de Pokémon para la página actual
  updatePagination(): void {
    const startIndex = this.currentPage * this.itemsPerPage;
    this.paginatedPokemons = this.filteredPokemons.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Ir a la página anterior
  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  // Ir a la siguiente página
  nextPage(): void {
    if (this.hasMorePokemons()) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  // Verificar si hay más Pokémon para mostrar
  hasMorePokemons(): boolean {
    return (this.currentPage + 1) * this.itemsPerPage < this.filteredPokemons.length;
  }

  // Seleccionar un Pokémon y mostrar sus detalles
  selectPokemon(name: string): void {
    this.service.getPokemonDetails(name).subscribe((response: any) => {
      this.selectedPokemon = response;
    });
  }

  // Desmarcar el Pokémon seleccionado y volver a la lista
  deselectPokemon(): void {
    this.selectedPokemon = null;
  }
}
