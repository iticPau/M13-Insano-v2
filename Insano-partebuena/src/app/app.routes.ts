import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa el componente del registro aquí
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; 
import { InicioComponent } from './inicio/inicio.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


// Define las rutas para tu aplicación
export const routes: Routes = [
  // Ruta para la página de registro
  { path: '', component: InicioComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'nosotros', component: NosotrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
