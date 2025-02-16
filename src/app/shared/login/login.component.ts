import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/**
 * Componente de inicio de sesión de la aplicación.
 * Este componente permite a los usuarios autenticarse mediante su correo electrónico y contraseña.
 */
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  /**
   * Formulario reactivo para el inicio de sesión.
   * Contiene los campos 'email' y 'password' con validaciones.
   */
  loginForm: FormGroup;

  /**
   * Mensaje de error que se muestra si las credenciales son incorrectas.
   */
  loginError: string = '';

  /**
   * Constructor del componente.
   * Inicializa el formulario de inicio de sesión con validaciones.
   * @param fb Instancia del servicio FormBuilder para construir el formulario.
   * @param http Instancia del servicio HttpClient para hacer solicitudes HTTP.
   * @param router Instancia del servicio Router para navegar entre rutas.
   */
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router ){
    
    // Inicializar el formulario con los campos email y password
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Valida que sea un correo electrónico válido
      password: ['', [Validators.required, Validators.minLength(8)]] // Valida que la contraseña tenga al menos 8 caracteres
    });
  }

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * Realiza una solicitud HTTP POST al backend para autenticar al usuario.
   * Si la autenticación es exitosa, guarda el token en el localStorage y redirige a la página de inicio.
   * Si hay un error, muestra un mensaje de error.
   */
  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      // Hacer la solicitud POST al backend para login con la URL desplegada en Render
      this.http.post<{ token: string }>('https://pokedeckfinal.onrender.com/api/login', formData)
        .subscribe(
          response => {
            // Guardar el token en el localStorage
            localStorage.setItem('token', response.token);
            // Redirigir a la página de inicio (dashboard) después de login exitoso
            this.router.navigate(['/dashboard']);
          },
          error => {
            // Muestra un mensaje de error en caso de credenciales incorrectas
            this.loginError = 'Credenciales incorrectas. Inténtelo de nuevo.';
          }
        );
    }
  }
}
