import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { Producto } from '../model/Product.model';
import { Usuario } from '../model/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class InsanoService {

  private baseUrl = 'http://localhost:8080/insano';

  public loggedInUser: any; //Alacenamos la informacion del usuario

  private productosCache$: Observable<Producto[]> | null = null;

  private datosEmpresaCache$: Observable<any> | null = null;
  public datosEmpresa: any = null; //Almacenamos los datos de la empresa

  private carritoProductos: Producto[] = [];

  constructor(private http: HttpClient) { }

  //Metodos

  obtenerTodosLosProductos(): Observable<Producto[]> {
    if (!this.productosCache$) {
      this.productosCache$ = this.http.get<Producto[]>(`${this.baseUrl}/productos`).pipe(
        shareReplay(1)
      );
    }
    return this.productosCache$;
  }

  //Metodo para añadir producto al carrito
  añadirAlCarrito(producto: Producto, cantidad: number): void {
    //Verificar si el producto ya esta en el carrito
    const productoExistente = this.carritoProductos.find(p => p.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad += cantidad;
    } else {
      this.carritoProductos.push({ ...producto, cantidad: cantidad });
    }
  }

  //Metodo para obtener el carrito de compras
  obtenerCarrito(): Producto[] {
    return this.carritoProductos;
  }

  //Metodo para vaciar el carrito
  vaciarCarrito(): void {
    this.carritoProductos = [];
  }

  //Metodo para actualizar el carrito
  actualizarCarrito(productos: Producto[]): void {
    this.carritoProductos = productos;
  }

  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/user/registro`, usuario);
  }

  login(usuario: string, password: string): Observable<Usuario> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = { usuario, password };
    console.log(params);
    return this.http.get<Usuario>(`${this.baseUrl}/user/login`, { params, headers }).pipe(
      tap((usuario: Usuario) => {
        this.loggedInUser = { username: usuario.usuario };
      })
    );
  }

  registrarCompra(nombreUsuario: string, idProducto: number, fecha: string, cantidad: number, precioTotal: number): Observable<any> {
    const body = { nombreUsuario: nombreUsuario, idProducto: idProducto, fecha: fecha, cantidad: cantidad, precioTotal: precioTotal };
    console.log('Registrando compra:', body);
    return this.http.post<any>(`${this.baseUrl}/compra/registrar`, body);
  }

  //Metodo para obtener productos por categoria
  obtenerProductosPorCategoria(categoria: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/productos/categoria`, {
      params: { categoria: categoria }
    });
  }
  obtenerDatosEmpresa(): Observable<any> {
    if (!this.datosEmpresaCache$) {
      this.datosEmpresaCache$ = this.http.get<any>(`${this.baseUrl}/empresa`).pipe(
        tap(datos => {
          this.datosEmpresa = datos;
        }),
        shareReplay(1)
      );
    }
    return this.datosEmpresaCache$;
  }

  obtenerDatosEmpresaSincronico() {
    return this.datosEmpresa; 
  }

  //Metodo para obtener productos por nombre
obtenerProductosPorNombre(nombre: string): Observable<Producto[]> {
  return this.http.get<Producto[]>(`${this.baseUrl}/productos/nombre`, {
    params: { nombre: nombre }
  });
}

  //Metodo para cerrar sesion
  logout(): void {
    console.log('Cerrando sesión');
    this.loggedInUser = null;
    console.log(this.loggedInUser);
  }

  //Metodo para verificar si el usuario esta autenticado
  isLoggedIn(): boolean {
    return this.loggedInUser != null;
  }

  //Metodo para obtener la info del usuario autenticado
  getUserInfo(): any {
    return this.loggedInUser;
  }
}
