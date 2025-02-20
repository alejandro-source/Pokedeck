import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../services/pokemon.service'; // Asegúrate de importar tu servicio correctamente

/**
 * @component HomeComponent
 * @description Componente que representa la página de inicio.
 * Muestra una lista de noticias relacionadas con Pokémon obtenidas del backend.
 */
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  /**
   * @property {Array<Object>} noticias
   * @description Lista de noticias que se mostrarán en la página de inicio.
   * Se cargan dinámicamente desde el backend.
   */
  noticias: any[] = [];

  /**
   * Constructor del componente.
   * @param serviceService Servicio para obtener las noticias desde el backend.
   */
  constructor(private serviceService: ServiceService) {}

  /**
   * Método de ciclo de vida que se ejecuta al inicializar el componente.
   * Carga las noticias desde el backend.
   */
  ngOnInit(): void {
    this.cargarNoticias();
  }

  /**
   * Carga las noticias desde el backend y las asigna a la propiedad 'noticias'.
   */
  cargarNoticias(): void {
    this.serviceService.getNoticias().subscribe(
      (data) => {
        this.noticias = data;
        console.log('Noticias cargadas:', this.noticias);
      },
      (error) => {
        console.error('Error al cargar noticias:', error);
      }
    );
  }
}
