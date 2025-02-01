import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  itemsPerPage: number = 50; // Mostrar 50 Pokémon por página
  currentPage: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  // Cargar solo los primeros 500 Pokémon desde la API
  loadPokemons(): void {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=500').subscribe((response: any) => {
      this.pokemons = response.results;
      this.filteredPokemons = [...this.pokemons]; // Filtrados inicialmente igual que los originales
      this.updatePagination();
    });
  }

  // Filtrar Pokémon por nombre
  filterPokemons(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredPokemons = this.pokemons.filter((pokemon) => 
      pokemon.name.toLowerCase().includes(term)
    );
    this.currentPage = 0; // Reiniciar a la primera página
    this.updatePagination();
  }

  // Actualizar la lista paginada
  updatePagination(): void {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedPokemons = this.filteredPokemons.slice(start, end);
  }

  // Mover a la siguiente página
  nextPage(): void {
    if (this.hasMorePokemons()) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  // Mover a la página anterior
  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  // Verificar si hay más Pokémon para mostrar
  hasMorePokemons(): boolean {
    return (this.currentPage + 1) * this.itemsPerPage < this.filteredPokemons.length;
  }

  // Seleccionar un Pokémon y cargar sus detalles
  selectPokemon(name: string): void {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`).subscribe((response: any) => {
      this.selectedPokemon = response;
    });
  }

  // Desmarcar el Pokémon seleccionado y volver a la lista
  deselectPokemon(): void {
    this.selectedPokemon = null;
  }
  
}
