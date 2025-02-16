import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Asegúrate de importar el servicio de autenticación

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
   * Se basa en el servicio de autenticación para verificar el token.
   */
  isLoggedIn: boolean = false;

  /**
   * Constructor del componente.
   * @param router Inyecta el servicio Router para navegar entre rutas.
   * @param authService Inyecta el servicio AuthService para verificar el estado de autenticación.
   */
  constructor(private router: Router, private authService: AuthService) {}

  /**
   * Inicializa el componente.
   * Verifica si el usuario está autenticado utilizando el servicio de autenticación.
   */
  ngOnInit() {
    // Usamos el servicio AuthService para verificar si el usuario está autenticado
    this.isLoggedIn = this.authService.isAuthenticated();
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
