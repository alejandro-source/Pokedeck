import { Component, OnInit } from '@angular/core';

/**
 * @component HomeComponent
 * @description Componente que representa la página de inicio.
 * Muestra una lista de noticias relacionadas con Pokémon.
 */

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent  {

    /**
    * @property {Array<Object>} noticias
    * @description Lista de noticias que se mostrarán en la página de inicio.
    * Cada noticia contiene su título, descripción e imagen de dicha noticia.
    */
    noticias = [
      {
          "titulo": "Evoluciones Prismáticas",
          "descripcion": "Descubre un nuevo nivel de asombro con las Evoluciones Prismáticas. ¡Los Pokémon alcanzan una nueva forma con habilidades extraordinarias y colores vibrantes en esta actualización especial!",
          "imagen": "icons/Home1.jpg"
      },
      {
          "titulo": "Evento de Pikachu Fest",
          "descripcion": "¡Pikachu Fest llega con eventos y nuevas cartas exclusivas! Participa en el evento y consigue Pikachu en su forma especial, además de cartas que podrás añadir a tu colección.",
          "imagen": "icons/Home2.jpg"
      },
      {
          "titulo": "Nueva expansión Pokémon",
          "descripcion": "La nueva expansión de cartas traerá Pokémon legendarios, con cartas llenas de poder y nuevas mecánicas de juego. ¡Prepara tu mazo para las batallas más épicas!",
          "imagen": "icons/Home3.png"
      }
  ]
  
}
