import { Component, OnInit } from '@angular/core';
import { ProductoContainerComponent } from '../producto-container/producto-container.component';
import { Producto } from '../model/Product.model';
import { InsanoService } from '../service/insano.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ProductoContainerComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  private destroy$ = new Subject<void>();
  productos: Producto[] = [];
  nombreEmpresa: string = '';

  constructor(private productosService: InsanoService) {}

  ngOnInit() {
    console.log('InicioComponent inicializado');
    this.cargarProductos();
    this.cargarDatosEmpresa();
  }

  cargarProductos() {
    this.productosService.obtenerTodosLosProductos().pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      data => {
        this.productos = data;
        console.log('Productos obtenidos:', this.productos);
      },
      error => {
        console.log('Hubo un error al obtener los productos:', error);
      }
    );
  }

  cargarDatosEmpresa() {
    this.productosService.obtenerDatosEmpresa().pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      data => {
        console.log('Datos de la empresa obtenidos:', data);
        this.nombreEmpresa = data.nombre;
      },
      error => {
        console.log('Hubo un error al obtener los datos de la empresa:', error);
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
