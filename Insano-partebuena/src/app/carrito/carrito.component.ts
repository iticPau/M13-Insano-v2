import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InsanoService } from '../service/insano.service';
import { Producto } from '../model/Product.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
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
    //Actualizar la cantidad del producto especificado
    this.products[productIndex].cantidad = newQuantity;
    this.insanoService.actualizarCarrito(this.products);

    console.log('Carrito de la compra actualizado:', this.products);
  }

  //Calcula el numero total de articulos
  getTotalQuantity(): number {
    return this.products.reduce((total, product) => total + product.cantidad, 0);
  }

  //Calcula el precio total de todos los articulos
  getTotalPrice(): number {
    let total = parseFloat((this.products.reduce((total, product) => total + (Number(product.precio) * product.cantidad), 0)).toFixed(2));
    return total;
  }

  registrarInteraccion(): void {

    if (this.authService.loggedInUser != null) {

      const fecha = new Date().toISOString();

      this.authService.obtenerCarrito().forEach(item => {

        console.log('Registrando interacción para el producto:', item);
        console.log('Usuario: ', this.authService.loggedInUser);
        const total: number = item.cantidad * Number(item.precio);

        this.authService.registrarCompra(this.authService.loggedInUser.username, item.id, fecha, item.cantidad, (total - 7.99)).subscribe(
          () => {
            console.log('Interacción registrada exitosamente');
          },
          error => {
            console.error('Error al registrar la interacción:', error);
          }
        );

      });

      alert('Pago exitoso. El carrito se ha vaciado.');
      this.insanoService.vaciarCarrito();
      this.products = [];

    } else {
      alert('Inicia sesión para realizar el pago');
    }

  }

}
