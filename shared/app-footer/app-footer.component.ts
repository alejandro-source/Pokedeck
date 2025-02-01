import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-footer',
  standalone: false,
  
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.css'
})
export class AppFooterComponent {
  
  constructor(private router: Router) {} // Inyecta el Router

  register() {
    this.router.navigate(['/register']); 
  }
  login() {
    this.router.navigate(['/login']); 
  }
}
