import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente de pie de página de la aplicación.
 * Este componente muestra enlaces de registro e inicio de sesión si el usuario no está autenticado.
 */

@Component({
  selector: 'app-app-footer',
  standalone: false,
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

   /**
   * Variable que determina si el usuario está autenticado o no.
   * Se basa en la existencia de un token en el localStorage.
   */

  isLoggedIn: boolean = false;

  /**
   * Constructor del componente.
   * @param router Inyecta el servicio Router para navegar entre rutas.
   */

  constructor(private router: Router) {}
  
   /**
   * Inicializa el componente.
   * Verifica si existe un token en el localStorage para determinar si el usuario está autenticado.
   */

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token');
  }
  
  /**
   * Navega a la ruta de registro.
  */
  register() {
    this.router.navigate(['/register']);
  }
  
  /**
   * Navega a la ruta de inicio de sesión.
  */
  login() {
    this.router.navigate(['/login']);
  }
}