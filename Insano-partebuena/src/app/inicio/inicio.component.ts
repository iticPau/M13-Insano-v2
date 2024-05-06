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

  constructor(private productosService: InsanoService) {}

  ngOnInit() {
    console.log('InicioComponent inicializado');
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.obtenerTodosLosProductos().pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      data => {
        this.productos = data;
      },
      error => {
        console.log('Hubo un error al obtener los productos:', error);
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
