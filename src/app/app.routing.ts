import { CategoriasComponent } from './components/categorias/categorias.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';

const appRoutes: Routes = [
  /*  {
    path: '',
    component: SidebarComponent,
    children: [
     ]
  },*/
  { path: 'login', component: LoginComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

