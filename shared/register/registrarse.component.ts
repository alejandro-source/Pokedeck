import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/**
 * Componente de registro de usuario.
 * Este componente permite a los usuarios registrarse proporcionando su nombre, correo electrónico, contraseña y confirmación de contraseña.
 * Realiza validaciones en los campos y maneja la solicitud al backend para crear un nuevo usuario.
 */

@Component({
  selector: 'app-registrarse',
  standalone: false,
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent {

  /**
   * Formulario reactivo que contiene los campos para el registro del usuario.
   * Incluye validaciones para cada campo y un validador para verificar que las contraseñas coincidan.
   */
  registroForm: FormGroup;

  /**
   * Variable que indica si el registro fue exitoso o si el usuario ya existe.
   */
  registroExiste: boolean = false;

   /**
   * Constructor del componente.
   * Inicializa el formulario con los campos 'nombre', 'email', 'password' y 'confirmPassword', aplicando las validaciones correspondientes.
   * @param fb Instancia del servicio FormBuilder para construir el formulario reactivo.
   * @param http Instancia del servicio HttpClient para hacer solicitudes HTTP al backend.
   * @param router Instancia del servicio Router para redirigir después del registro.
   */

  constructor(
    private fb: FormBuilder,
    private http: HttpClient, 
    private router: Router 
  ) {
    // Inicializa el formulario reactivo con las validaciones definidas
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]], // Nombre obligatorio con al menos 3 caracteres
      email: ['', [Validators.required, Validators.email]], // Email obligatorio y con formato válido
      password: ['', [
        Validators.required, 
        Validators.minLength(8), // Contraseña con al menos 8 caracteres
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/) // Contraseña con al menos 1 mayúscula y 1 número
      ]],
      confirmPassword: ['', [Validators.required]] // Confirmación de contraseña obligatoria
    }, { validator: this.passwordMatchValidator });
  }

  /**
   * Validador personalizado para verificar que las contraseñas coincidan.
   * @param form El formulario que se va a validar.
   * @returns Un objeto de error con la clave 'mismatch' si las contraseñas no coinciden, o null si son iguales.
   */

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { mismatch: true };
  }

   /**
   * Obtiene el mensaje de error correspondiente para cada campo del formulario.
   * @param field El nombre del campo que se desea obtener el mensaje de error.
   * @returns El mensaje de error asociado al campo.
   */
  
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

  /**
   * Maneja el envío del formulario de registro.
   * Si el formulario es válido, realiza una solicitud HTTP POST al backend para registrar al usuario.
   * Si el registro es exitoso, redirige al usuario a la página de inicio de sesión.
   * @returns void
   */

  onSubmit() {
    if (this.registroForm.valid) {
      const formData = this.registroForm.value;

      // Haciendo la petición POST al backend
      this.http.post('http://localhost:3000/api/registro', formData)
        .subscribe(
          (response) => {
            console.log('Usuario registrado con éxito:', response);
            this.registroExiste = true; 
            this.registroForm.reset();
            this.router.navigate(['/login']); 
          },
          (error) => {
            console.error('Error al registrar el usuario:', error);
          }
        );
    } else {
      console.log('Formulario inválido');
    }
  }
}


