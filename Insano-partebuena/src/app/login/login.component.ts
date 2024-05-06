import { Component, NgModule } from '@angular/core';
import { InsanoService } from '../service/insano.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: InsanoService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Si el inicio de sesión es exitoso, redirige a la página principal
      this.router.navigate(['/']);
    } else {
      alert('Usuario o contraseña incorrectos');
      // Si el inicio de sesión falla, muestra un mensaje de error
      this.loginError = 'Usuario o contraseña incorrectos';
    }
  }
}
