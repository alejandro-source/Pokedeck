import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // Inicializar el formulario
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      // Hacer la solicitud POST al backend para login
      this.http.post<{ token: string }>('http://localhost:3000/api/login', formData)
        .subscribe(
          response => {
            // Guardar el token en el localStorage
            localStorage.setItem('token', response.token);
            // Redirigir a la página de inicio (dashboard)
            this.router.navigate(['/dashboard']);
          },
          error => {
            // Mostrar error en caso de credenciales incorrectas
            this.loginError = 'Credenciales incorrectas. Inténtelo de nuevo.';
          }
        );
    }
  }
}
