import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';  // Para manejo de errores

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) { }

  /**
   * Método para hacer login con el correo y la contraseña
   * @param email El correo del usuario
   * @param password La contraseña del usuario
   */
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password })
      .pipe(
        catchError(this.handleError)  // Manejamos errores en caso de que la solicitud falle
      );
  }

  /**
   * Método para guardar el token y los datos del usuario en localStorage
   * @param response Respuesta del backend que contiene el token y los datos del usuario
   */
  saveUserData(response: any): void {
    if (response?.token && response?.user) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user)); // Guardamos los datos del usuario
    }
  }

  /**
   * Método para obtener los datos del usuario desde localStorage
   * @returns Los datos del usuario o un objeto vacío si no existen
   */
  getUserData(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  /**
   * Método para obtener el token desde localStorage
   * @returns El token o null si no existe
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Método para verificar si el usuario está autenticado
   * @returns true si hay un token, false si no
   */
  isAuthenticated(): boolean {
    const token = this.getToken();
    // Aquí podrías agregar lógica para verificar si el token es válido, por ejemplo comprobando su fecha de expiración
    return token !== null;
  }

  /**
   * Método para eliminar el token y los datos del usuario de localStorage (logout)
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  /**
   * Método para manejar los errores de las solicitudes HTTP
   * @param error El error que ocurrió
   * @returns Un observable con el error
   */
  private handleError(error: any): Observable<never> {
    console.error('Error en la solicitud:', error);  // Puedes mejorar este log según tus necesidades
    throw error;  // Puedes lanzar el error o devolver un valor por defecto
  }

  /**
   * Método para obtener los encabezados con el token si está disponible
   * @returns Los encabezados para hacer peticiones autenticadas
   */
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : new HttpHeaders();
  }
}
