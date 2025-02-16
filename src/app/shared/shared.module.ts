import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { RouterModule } from '@angular/router';
import { RegistrarseComponent } from './register/registrarse.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    RegistrarseComponent,
    LoginComponent,
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
  ]
})
export class SharedModule { }
