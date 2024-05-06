import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../model/Product.model';
import { InsanoService } from '../service/insano.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: Producto | undefined;

  constructor(private route: ActivatedRoute,
    private insanoService: InsanoService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['product']) {
        this.product = JSON.parse(params['product']);
      }
    });
  }

  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  anadirAlCarrito() {
    if (this.product && this.count > 0) {
      this.insanoService.añadirAlCarrito(this.product, this.count);
      this.count = 0; 
    }

    console.log('Carrito:', this.insanoService.obtenerCarrito());
  }
}
