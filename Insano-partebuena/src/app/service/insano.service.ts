import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Producto } from '../model/Product.model';

@Injectable({
  providedIn: 'root'
})
export class InsanoService {

  private baseUrl = 'http://localhost:8080/insano';

  public loggedInUser: any; // Aquí almacenarías la información del usuario

  private productosCache$: Observable<Producto[]> | null = null;
  
  private carritoProductos: Producto[] = [];

  constructor(private http: HttpClient) { }

  // Métodos

  obtenerTodosLosProductos(): Observable<Producto[]> {
    if (!this.productosCache$) {
      this.productosCache$ = this.http.get<Producto[]>(`${this.baseUrl}/productos`).pipe(
        shareReplay(1)
      );
    }
    return this.productosCache$;
  }

  // Método para añadir producto al carrito
  añadirAlCarrito(producto: Producto, cantidad: number): void {
    // Verificar si el producto ya está en el carrito
    const productoExistente = this.carritoProductos.find(p => p.id === producto.id);
    if (productoExistente) {
      // Si el producto ya está en el carrito, solo actualiza la cantidad
      productoExistente.cantidad += cantidad;
    } else {
      // Si no está en el carrito, establece la cantidad y añádelo
      this.carritoProductos.push({ ...producto, cantidad: cantidad });
    }
  }

  // Método para obtener el carrito de compras
  obtenerCarrito(): Producto[] {
    return this.carritoProductos;
  }

  // Método para vaciar el carrito
  vaciarCarrito(): void {
    this.carritoProductos = [];
  }

  // Método para actualizar el carrito
  actualizarCarrito(productos: Producto[]): void {
    this.carritoProductos = productos;
  }

  // --------------------------------------------


  // Método para iniciar sesión
  login(username: string, password: string): boolean {
    // Aquí realizarías la lógica de autenticación
    // Si la autenticación es exitosa, guarda la información del usuario y devuelve true
    if (username === 'usuario' && password === 'contraseña') {
      this.loggedInUser = { username: username };
      return true;
    }
    return false;
  }

  // Método para cerrar sesión
  logout(): void {
    console.log('Cerrando sesión');
    this.loggedInUser = null;
    console.log(this.loggedInUser);
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.loggedInUser != null;
  }

  // Método para obtener la información del usuario autenticado
  getUserInfo(): any {
    return this.loggedInUser;
  }
}
