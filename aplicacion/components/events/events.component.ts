import { Component } from '@angular/core';

/**
 * @component EventsComponent
 * @description Componente que muestra una lista de eventos de Pokémon y nos permite ver una informacion mas detallada de cada evento.
 */

@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

    /**
   * @property {Array<Object>} eventsList
   * @description Lista de eventos disponibles,mostrando de cada uno,el titulo la descripcion,la fecha,la imagen y el contenido detallado (si seleccionamos "ver más").
   */

  eventsList = [
    {
      title: 'Torneo de Primavera',
      description: 'Participa en el Torneo de Primavera y demuestra tus habilidades como entrenador Pokémon. ¡Grandes premios te esperan!',
      date: '2025-03-28',
      imageUrl: 'icons/Evento.jpg',
      detailedContent: 'El Torneo de Primavera es una competencia anual donde los entrenadores de todo el mundo se enfrentan en batallas épicas. Este año, el torneo se llevará a cabo en la región de Kanto y contará con premios exclusivos para los ganadores.'
    },
    {
      title: 'Festival de Verano',
      description: 'Únete al Festival de Verano y disfruta de actividades temáticas, concursos y muchas sorpresas.',
      date: '2025-06-15',
      imageUrl: 'icons/Evento2.avif',
      detailedContent: 'El Festival de Verano es un evento lleno de diversión y entretenimiento para entrenadores de todas las edades. Habrá concursos de disfraces, competencias de captura y muchas actividades más. No te lo pierdas.'
    },
    {
      title: 'Competencia de Otoño',
      description: 'Participa en la Competencia de Otoño y demuestra tus habilidades en batallas Pokémon. ¡Premios increíbles te esperan!',
      date: '2025-09-20',
      imageUrl: 'icons/Evento3.webp',
      detailedContent: 'La Competencia de Otoño es una oportunidad para que los entrenadores demuestren sus habilidades en batallas Pokémon. Este evento se llevará a cabo en la región de Johto y contará con premios exclusivos para los ganadores.'
    },
    {
      title: 'Festival de Invierno',
      description: 'Únete al Festival de Invierno y disfruta de actividades temáticas, concursos y muchas sorpresas.',
      date: '2025-12-10',
      imageUrl: 'icons/Evento4.jpg',
      detailedContent: 'El Festival de Invierno es un evento lleno de diversión y entretenimiento para entrenadores de todas las edades. Habrá concursos de disfraces, competencias de captura y muchas actividades más. No te lo pierdas.'
    },
    {
      title: 'Torneo de Año Nuevo',
      description: 'Celebra el Año Nuevo con un emocionante torneo Pokémon. ¡Grandes premios y sorpresas te esperan!',
      date: '2026-01-01',
      imageUrl: 'icons/Evento5.jpeg',
      detailedContent: 'El Torneo de Año Nuevo es una competencia especial para celebrar el inicio del nuevo año. Los entrenadores de todo el mundo se enfrentarán en batallas épicas y podrán ganar premios exclusivos.'
    },
    {
      title: 'Competencia de Primavera',
      description: 'Participa en la Competencia de Primavera y demuestra tus habilidades en batallas Pokémon. ¡Premios increíbles te esperan!',
      date: '2026-03-15',
      imageUrl: 'icons/Evento6.jpeg',
      detailedContent: 'La Competencia de Primavera es una oportunidad para que los entrenadores demuestren sus habilidades en batallas Pokémon. Este evento se llevará a cabo en la región de Hoenn y contará con premios exclusivos para los ganadores.'
    }
  ];

   /**
   * @property {Object | null} selectedEvent
   * @description Evento actualmente seleccionado. Si es `null`, no hay evento seleccionado.
   */

  selectedEvent: any = null;

    /**
   * @method selectEvent
   * @description Selecciona un evento y lo almacena en `selectedEvent` para mostrar sus detalles.
   * @param {Object} event - Evento el cual va a mostrar la informacion mas detallada.
   */

  selectEvent(event: any) {
    this.selectedEvent = event;
  }

    /**
   * @method closeEvent
   * @description Cierra el evento seleccionado, estableciendo `selectedEvent` a `null`.
   */
  
  closeEvent() {
    this.selectedEvent = null;
  }
}