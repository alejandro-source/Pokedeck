import { Component } from '@angular/core';

/**
 * @component NewsComponent
 * @description Componente que muestra una lista de noticias de Pokémon y nos permite ver una informacion mas detallada de cada noticia.
 */

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

   /**
   * @property {Array<Object>} newsList
   * @description Lista de noticias disponibles,mostrando de cada uno,el titulo la descripcion,la fecha,la imagen y el contenido detallado (si seleccionamos "ver más").
   */


  newsList = [
    {
      title: 'Nuevo Pokémon descubierto en Galar',
      content: 'Se ha descubierto un nuevo Pokémon en la región de Galar. Este Pokémon tiene habilidades únicas y se espera que sea una gran adición a la Pokédex. Los entrenadores están emocionados por capturarlo y descubrir todas sus características.',
      date: '2025-03-28',
      imageUrl: 'icons/Noticia1.webp',
      detailedContent: 'El nuevo Pokémon descubierto en la región de Galar es de tipo dual y tiene habilidades nunca antes vistas. Los investigadores están estudiando sus patrones de comportamiento y su impacto en el ecosistema local. Se espera que los entrenadores puedan capturarlo en eventos especiales próximamente.'
    },
    {
      title: 'Investigación sobre el Pokémon Legendario Mewtwo',
      content: 'Los investigadores han descubierto más detalles sobre Mewtwo, el famoso Pokémon Legendario. Se están llevando a cabo estudios sobre su origen y cómo interactúa con otros Pokémon en la naturaleza.',
      date: '2025-04-11',
      imageUrl: 'icons/Noticia2.jpg',
      detailedContent: 'Mewtwo, conocido por su poder psíquico, ha sido objeto de investigaciones en todo el mundo. Se cree que su origen podría estar vinculado a experimentos científicos en Kanto, y nuevos hallazgos están arrojando luz sobre su papel en el ecosistema Pokémon.'
    },
    {
      title: 'Nuevas investigaciones sobre el comportamiento de Eevee',
      content: 'Recientes estudios han revelado patrones curiosos sobre el comportamiento de Eevee y sus evoluciones. Se ha demostrado que Eevee tiene una conexión única con su entorno, lo que influye en su evolución en diferentes formas.',
      date: '2025-04-15',
      imageUrl: 'icons/Noticia3.png',
      detailedContent: 'Eevee, conocido por su versatilidad para evolucionar en diferentes tipos de Pokémon, ha sido objeto de varios estudios. Los entrenadores ahora saben más sobre cómo los cambios en el entorno pueden influir en la evolución de Eevee, lo que podría cambiar la forma en que entrenan a este Pokémon.'
    },
    {
      title: 'La historia de los iniciales de Kanto',
      content: 'Se ha revelado una nueva investigación sobre los Pokémon iniciales de la región de Kanto: Bulbasaur, Charmander y Squirtle. Esta investigación explora su historia y cómo llegaron a convertirse en los Pokémon más queridos por los entrenadores.',
      date: '2025-04-26',
      imageUrl: 'icons/Noticia4.png',
      detailedContent: 'Los Pokémon iniciales de Kanto, Bulbasaur, Charmander y Squirtle, tienen una historia que se remonta a los primeros días de la región. Esta investigación revela cómo fueron seleccionados y por qué los entrenadores de todo el mundo han llegado a adoptarlos como sus compañeros de confianza.'
    },
    {
      title: 'Avances en el estudio de los Pokémon de Alola',
      content: 'Los estudios sobre los Pokémon originarios de la región de Alola han avanzado significativamente. Se ha descubierto nueva información sobre sus habilidades y adaptaciones en su entorno tropical.',
      date: '2025-05-01',
      imageUrl: 'icons/Noticia5.png',
      detailedContent: 'Los Pokémon de Alola tienen características únicas que los hacen diferentes de los de otras regiones. Investigaciones recientes han revelado cómo se han adaptado a su entorno, y se están estudiando las formas de aprovechar estas adaptaciones en los entrenamientos de combate.'
    },
    {
      title: 'Pokémon brillantes descubiertos en Sinnoh',
      content: 'Recientes descubrimientos han permitido encontrar Pokémon brillantes en la región de Sinnoh. Estos Pokémon poseen una rara característica de color, que ha emocionado a la comunidad de entrenadores.',
      date: '2025-05-18',
      imageUrl: 'icons/Noticia6.jpg',
      detailedContent: 'La región de Sinnoh ha sido conocida por su diversidad de Pokémon, pero ahora se han identificado Pokémon brillantes que destacan por su color especial. Estos Pokémon son muy buscados por los entrenadores, quienes ahora están comenzando a documentar sus características y patrones de aparición.'
    }
  ];

     /**
   * @property {Object | null} selectedEvent
   * @description Noticia actualmente seleccionado. Si es `null`, no hay noticia seleccionada.
   */

  selectedNews: any = null;

      /**
   * @method selectEvent
   * @description Selecciona una noticia y lo almacena en `selectedNews` para mostrar sus detalles.
   * @param {Object} event - Evento el cual va a mostrar la informacion mas detallada.
   */

  selectNews(news: any) {
    this.selectedNews = news;
  }

     /**
   * @method closeEvent
   * @description Cierra la noticia seleccionada, estableciendo `selectedNews` a `null`.
   */

  closeNews() {
    this.selectedNews = null;
  }
}
