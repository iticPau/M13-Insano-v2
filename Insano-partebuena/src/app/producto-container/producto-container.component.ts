import { Component, Input, input } from '@angular/core';
import { Producto } from '../model/Product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-container',
  standalone: true,
  imports: [],
  templateUrl: './producto-container.component.html',
  styleUrl: './producto-container.component.css'
})
export class ProductoContainerComponent {

  @Input() product: Producto | undefined;

  constructor(private router: Router) { }

  redirectToProductDetail() {
    console.log('Redirecting to product detail', this.product);
    if (this.product) {
      this.router.navigate(['product-detail'], { queryParams: { product: JSON.stringify(this.product) } });
    }
  }
  
}
