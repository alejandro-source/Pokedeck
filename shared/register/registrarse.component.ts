import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  standalone: false,
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  registroForm: FormGroup;
  registroExiste: boolean = false;


  constructor(
    private fb: FormBuilder,
    private http: HttpClient, // Asegúrate de que HttpClient está inyectado
    private router: Router // Para redirigir después del registro
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/) // Contraseña con al menos 1 mayúscula y 1 número
      ]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  getErrorMessage(field: string): string {
    const control = this.registroForm.get(field);

    if (control?.hasError('required')) {
      return 'Este campo es obligatorio.';
    }
    if (control?.hasError('minlength')) {
      return `Debe tener al menos ${control.errors?.['minlength'].requiredLength} caracteres.`;
    }
    if (control?.hasError('email')) {
      return 'Ingrese un email válido.';
    }
    if (control?.hasError('pattern')) {
      return 'La contraseña debe contener al menos 8 caracteres, 1 mayúscula y 1 número.';
    }
    if (field === 'confirmPassword' && this.registroForm.hasError('mismatch')) {
      return 'Las contraseñas no coinciden.';
    }

    return '';
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const formData = this.registroForm.value;

      // Haciendo la petición POST al backend
      this.http.post('http://localhost:3000/api/registro', formData)
        .subscribe(
          (response) => {
            console.log('Usuario registrado con éxito:', response);
            this.registroExiste = true; // Puedes mostrar un mensaje de éxito
            this.registroForm.reset(); // Resetear el formulario
            this.router.navigate(['/login']); // Redirige a la página de login si lo deseas
          },
          (error) => {
            console.error('Error al registrar el usuario:', error);
            // Aquí podrías manejar el error si hay problemas con la petición
          }
        );
    } else {
      console.log('Formulario inválido');
    }
  }
}

// http://localhost:3000/api/usuarios --> para ver los usuarios

