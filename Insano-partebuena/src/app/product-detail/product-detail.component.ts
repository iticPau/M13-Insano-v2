import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private insanoService: InsanoService, private router: Router) { }

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
      alert('Se han añadido ' + this.count + ' ' + this.product.nombre + '/es al carrito');
      this.count = 0; 
      this.router.navigate(['/carrito']);
    }

    console.log('Carrito:', this.insanoService.obtenerCarrito());
  }
}
