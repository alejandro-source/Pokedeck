import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';  // Importamos el servicio de autenticación
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  standalone: false,
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  userData: any;
  userMenuVisible: boolean = false;  // Controla la visibilidad del menú desplegable

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Recuperamos los datos del usuario desde el localStorage
    this.userData = this.authService.getUserData();
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  // Muestra u oculta el menú de usuario
  toggleUserMenu() {
    this.userMenuVisible = !this.userMenuVisible;
  }

  // Cerrar sesión
  logout() {
    this.authService.logout();  // Llama al método de logout del servicio de autenticación
    this.router.navigate(['/login']);  // Redirige al login
  }
}
