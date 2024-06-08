import { Component, NgModule } from '@angular/core';
import { InsanoService } from '../service/insano.service';
import { Router, RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../model/Usuario.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
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
    this.authService.login(this.username, this.password).subscribe(
      (usuario: Usuario) => {
        //Si el inicio de sesion es exitoso, redirige a la pagina principal
        this.router.navigate(['/']);
        alert('Inicio de sesión exitoso');
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        alert('Usuario o contraseña incorrectos');
        //Si el inicio de sesion falla, muestra un mensaje de error
        this.loginError = 'Usuario o contraseña incorrectos';
      }
    );
  }
  
}
