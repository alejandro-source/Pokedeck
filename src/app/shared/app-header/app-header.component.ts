import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';  
import { Router } from '@angular/router';

 /**
 * Componente de encabezado de la aplicación.
 * Este componente maneja el menú de la pagina, autenticación del usuario y el menú de usuario.
 */

@Component({
  selector: 'app-app-header',
  standalone: false,
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  /**
   * Almacena los datos del usuario recuperados desde el servicio de autenticación.
  */
  userData: any;

  /**
   * Controla la visibilidad del menú de usuario.
  */
  userMenuVisible: boolean = false;  

    /**
   * Constructor del componente.
   * @param authService Instancia del servicio de autenticación para gestionar la autenticación del usuario.
   * @param router Instancia del servicio Router para navegar entre rutas.
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Inicializa el componente.
   * Recupera los datos del usuario desde el servicio de autenticación.
   */
  ngOnInit(): void {
 
    this.userData = this.authService.getUserData();
  }

   /**
   * Verifica si el usuario está autenticado mediante el servicio de autenticación.
   * @returns true si el usuario está autenticado, false si no lo está.
   */

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

   /**
   * Cambia el estado de visibilidad del menú de usuario.
   * Se utiliza para mostrar u ocultar el menú de usuario.
   */
  toggleUserMenu() {
    this.userMenuVisible = !this.userMenuVisible;
  }

  
  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']);  
  }
}
