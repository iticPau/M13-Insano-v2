import { Component } from '@angular/core';
import { ProductoContainerComponent } from '../producto-container/producto-container.component';
import { Product } from '../model/Product.model';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ProductoContainerComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  mockData:  Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      urlImage: '../assets/computer-proyecto.png',
      price: 100
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      urlImage: '../assets/computer-proyecto.png',
      price: 200
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      urlImage: '../assets/computer-proyecto.png',
      price: 300
    },
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      urlImage: '../assets/computer-proyecto.png',
      price: 100
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      urlImage: '../assets/computer-proyecto.png',
      price: 200
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      urlImage: '../assets/computer-proyecto.png',
      price: 300
    },
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      urlImage: '../assets/computer-proyecto.png',
      price: 100
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      urlImage: '../assets/computer-proyecto.png',
      price: 200
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      urlImage: '../assets/computer-proyecto.png',
      price: 300
    }
  ];

}
