import { Component } from '@angular/core';
import { InsanoService } from '../service/insano.service';
import { Producto } from '../model/Product.model';
import { ProductoContainerComponent } from '../producto-container/producto-container.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [ProductoContainerComponent, FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  productos: Producto[] = [];
  nombreProducto: string = '';  //Para almacenar el nombre del producto ingresado por el usuario

  constructor(private insanoService: InsanoService) { }

  categorias = [
    { id: 1, nombre: 'ACCESORIOS', urlImg: '../../assets/accesorios.jpg' },
    { id: 2, nombre: 'MONITORES', urlImg: '../../assets/monitores.jpg' },
    { id: 3, nombre: 'TECLADOS Y RATONES', urlImg: '../../assets/teclados_y_ratones.jpg' },
    { id: 4, nombre: 'AURICULARES Y ALTAVOCES', urlImg: '../../assets/auriculares_y_altavoces.jpg' },
    { id: 5, nombre: 'COMPONENTES HARDWARE', urlImg: '../../assets/componentes_hardware.jpg' },
    { id: 6, nombre: 'PC SOBRE MESA', urlImg: '../../assets/pc_sobremesa.jpg' },
    { id: 7, nombre: 'PORTATILES', urlImg: '../../assets/portatiles.jpg' }
  ];

  search(categoria: string) {
    console.log('Buscando en la categoría: ', categoria);
    this.insanoService.obtenerProductosPorCategoria(categoria).subscribe({
      next: (productos) => {
        console.log('Productos encontrados: ', productos);
        this.productos = productos;
      },
      error: (error) => {
        console.error('Error al obtener productos: ', error);
      }
    });
  }

  buscarPorNombre() {
    console.log('Buscando productos por nombre:', this.nombreProducto);
    this.insanoService.obtenerProductosPorNombre(this.nombreProducto).subscribe({
      next: (productos) => {
        console.log('Productos encontrados:', productos);
        this.productos = productos;
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      }
    });
  }
  
  //TrackBy para mejorar el rendimiento de ngFor
  trackById(index: number, item: any): any {
    return item.id;
  }
}
