import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InsanoService } from '../service/insano.service';
import { Producto } from '../model/Product.model';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
Number(arg0: string) {
throw new Error('Method not implemented.');
}

  products: Producto[] = [];

  constructor(private authService: InsanoService, private insanoService: InsanoService) { }

  ngOnInit() {
    this.loadProductsFromCart();
  }

  loadProductsFromCart() {
    this.products = this.insanoService.obtenerCarrito();
    console.log('Carrito de la compra:', this.products);
  }


  updateQuantity(productIndex: number, newQuantity: number): void {
    // Actualizar la cantidad del producto
    this.products[productIndex].cantidad = newQuantity;
    this.insanoService.actualizarCarrito(this.products);

    console.log('Carrito de la compra actualizado:', this.products);
  }

  // Metodo para calcular el numero total de articulos
  getTotalQuantity(): number {
    return this.products.reduce((total, product) => total + product.cantidad, 0);
  }

  // Metodo para calcular el precio total de todos los articulos
  getTotalPrice(): number {
    return this.products.reduce((total, product) => total + (Number(product.precio) * product.cantidad), 0);
  }

  pay(): void {
    // Procesar el pago
    alert('Iniciando proceso de pago...');
    if (this.authService.loggedInUser != null) {
      alert('Pago exitoso');
    }
    else {
      alert('Inicia sesión para realizar el pago');
    }
  }

}
