import { Component } from '@angular/core';
import { InsanoService } from '../service/insano.service';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../model/Usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nuevoUsuario: Usuario = {} as Usuario; //Inicializamos nuevoUsuario como un objeto vacio de tipo Usuario

  constructor(private usuarioService: InsanoService, private router: Router) { }

  registrarUsuario() {
    //Miramos si todos los campos estan rellenados
    if (!this.camposRellenados()) {
      alert('Por favor, rellena todos los campos.');
      return;
    }

    this.usuarioService.registrarUsuario(this.nuevoUsuario).subscribe(
      (response) => {
        alert('Usuario registrado con exito');
        console.log('Usuario registrado:', response);

        //Despues de registrar al usuario, intenta iniciar sesion automaticamente
        this.loginDespuesDeRegistro();
      },
      (error) => {
        alert('Error al registrar usuario');
        console.error('Error al registrar usuario:', error);
      }
    );
  }

  private loginDespuesDeRegistro() {
    //Llama al metodo de inicio de sesion con los datos del nuevo usuario
    this.usuarioService.login(this.nuevoUsuario.usuario, this.nuevoUsuario.password).subscribe(
      (usuario: Usuario) => {
        this.router.navigate(['/']);
        alert('Inicio de sesión exitoso después del registro');
      },
      (error) => {
        console.error('Error en el inicio de sesión después del registro:', error);
        alert('Error al iniciar sesión después del registro');
      }
    );
  }

  //Funcion para comprobar si todos los campos estan rellenados
  camposRellenados(): boolean {
    return (
      !!this.nuevoUsuario.nombre &&
      !!this.nuevoUsuario.apellidos &&
      !!this.nuevoUsuario.usuario &&
      !!this.nuevoUsuario.password &&
      !!this.nuevoUsuario.email &&
      !!this.nuevoUsuario.direccion &&
      !!this.nuevoUsuario.telefono
    );
  }
}
