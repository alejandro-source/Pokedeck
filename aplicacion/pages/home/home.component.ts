import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.getUsuarios().subscribe((usuarios) => {
        console.log(usuarios);
      });
    }

    getUsuarios(): Observable<any> {
      return this.http.get('http://localhost:8080/api/usuarios');
    }

    
  noticias = [
    {
      titulo: "Evoluciones Prismáticas",
      descripcion: "Descubre un nuevo nivel de asombro con las Evoluciones Prismáticas...",
      imagen: "icons/eventos.png"
    },
    {
      titulo: "Evento de Pikachu Fest",
      descripcion: "¡Pikachu Fest llega con eventos y nuevas cartas exclusivas!",
      imagen: "icons/eventos.png"
    },
    {
      titulo: "Nueva expansión Pokémon",
      descripcion: "La nueva expansión de cartas traerá Pokémon legendarios...",
      imagen: "icons/eventos.png"
    }
  ];

  verNoticia(noticia: any) {
    alert("Mostrando noticia: " + noticia.titulo);
  }

  
}
