import { Component } from '@angular/core';
import { InsanoService } from '../service/insano.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  contactData = {
    nombre: '',
    telefono: '',
    email: '',
    asunto: '',
    fecha: null, 
    observacion: ''
  };

  telefono: string = '';
  nombre: string = '';
  constructor(private insanoService: InsanoService) { }

  ngOnInit(): void {
    this.insanoService.obtenerDatosEmpresa();
  }

  onSubmit() {
    alert('Formulario enviado');
    console.log('Form Data:', this.contactData);
  }

}
