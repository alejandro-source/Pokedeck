import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-footer',
  standalone: false,
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}
  
  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token');
  }
  
  register() {
    this.router.navigate(['/register']);
  }

  login() {
    this.router.navigate(['/login']);
  }
}