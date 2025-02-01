import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// FormBuilder --> Sirve para la creacion de formularios reactivos
// FormGroup --> Sirve para agrupar los controles de un formulario
// Vadilators --> Porporiona reglas de validacion para los campos del formulario
@Component({
  selector: 'app-registrarse',
  standalone: false,
  
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {

  registroForm: FormGroup; // Variable para el formulario
  registroExiste: boolean = false; // Variable para verificar si el registro existe

  // Voy a crear el constructor e inicializar el formulario
  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/) // Al menos 1 mayúscula y 1 número
      ]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  // Validación de coincidencia de contraseñas
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  // Método para obtener los mensajes de error dinámicamente
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

  // Método para enviar el formulario
  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Formulario enviado con éxito:', this.registroForm.value);
      this.registroExiste = true; // Muestra el mensaje de éxito
      this.registroForm.reset(); // Reinicia el formulario
    } else {
      console.log('Formulario inválido');
    }
  }
}

