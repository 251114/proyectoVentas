import { ListProductoComponent } from './components/producto/list-producto/list-producto.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EditProveedorComponent } from './components/proveedor/edit-proveedor/edit-proveedor.component';
import { MantProveedorComponent } from './components/proveedor/mant-proveedor/mant-proveedor.component';
import { NewProveedorComponent } from './components/proveedor/new-proveedor/new-proveedor.component';
import { ListProveedorComponent } from './components/proveedor/list-proveedor/list-proveedor.component';
import { ViewProveedorComponent } from './components/proveedor/view-proveedor/view-proveedor.component';
import { AdmProductoComponent } from './components/producto/adm-producto/adm-producto.component';
import { NewProductoComponent } from './components/producto/new-producto/new-producto.component';
import { GanananciasComponent } from './components/ingresos/ganancias/ganancias.component';

const appRoutes: Routes = [
    {
    path: '',
    component: SidebarComponent,
    children: [
      {path:'edit-proveedor/:id', component: EditProveedorComponent},
      {path:'mant-proveedor', component: MantProveedorComponent},
      {path:'new-proveedor', component: NewProveedorComponent},
      {path:'list-proveedor', component: ListProveedorComponent},
      {path:'view-proveedor/:id', component: ViewProveedorComponent},
      //ganancias
      {path:'ganancias', component: GanananciasComponent},
      //productos
      {path:'adm-producto', component: AdmProductoComponent},
      {path:'new-producto', component: NewProductoComponent},
      {path:'list-producto', component: ListProductoComponent}
     ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

