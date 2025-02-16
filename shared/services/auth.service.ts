import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';  

/**
 * Servicio de autenticación para manejar el login, guardar el token y los datos del usuario,
 * verificar si el usuario está autenticado y hacer logout.
 */

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  // URL de la API para el login
  private apiUrl = 'http://localhost:3000/api/login';

   /**
   * Constructor del servicio AuthService.
   * @param http Instancia de HttpClient para realizar solicitudes HTTP al backend.
   */

  constructor(private http: HttpClient) { }

  /**
   * Método para hacer login con el correo y la contraseña.
   * Realiza una solicitud HTTP POST al backend para autenticar al usuario.
   * @param email El correo del usuario.
   * @param password La contraseña del usuario.
   * @returns Un Observable con la respuesta del servidor, que contiene el token y los datos del usuario.
   */
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password })
      .pipe(
        catchError(this.handleError)  
      );
  }

   /**
   * Método para guardar el token y los datos del usuario en localStorage.
   * @param response Respuesta del backend que contiene el token y los datos del usuario.
   * @returns void
   */

  saveUserData(response: any): void {
    if (response?.token && response?.user) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user)); 
    }
  }

   /**
   * Método para obtener los datos del usuario desde localStorage.
   * @returns Los datos del usuario como un objeto o un objeto vacío si no existen.
   */
  getUserData(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

   /**
   * Método para obtener el token desde localStorage.
   * @returns El token si está presente en localStorage, o null si no existe.
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Método para verificar si el usuario está autenticado.
   * Verifica si existe un token en localStorage.
   * @returns true si el token existe, false si no.
   */
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  /**
   * Método para eliminar el token y los datos del usuario de localStorage (logout).
   * Elimina los datos de sesión para cerrar la sesión del usuario.
   * @returns void
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  /**
   * Método para manejar los errores de las solicitudes HTTP.
   * Este método se llama cuando una solicitud falla, y puede ser utilizado para realizar acciones como mostrar un mensaje de error o registrar el error.
   * @param error El error que ocurrió durante la solicitud HTTP.
   * @returns Un Observable con el error para su manejo posterior.
   */
  private handleError(error: any): Observable<never> {
    console.error('Error en la solicitud:', error); 
    throw error;  
  }

  /**
   * Método para obtener los encabezados HTTP con el token de autenticación si está disponible.
   * Se usa para hacer solicitudes autenticadas al backend.
   * @returns Los encabezados HTTP con el token de autenticación o encabezados vacíos si no hay token.
   */
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : new HttpHeaders();
  }
}
