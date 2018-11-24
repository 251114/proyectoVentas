import { AdmProductoComponent } from './components/producto/adm-producto/adm-producto.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { MaterialModule } from './shared/modules/material.module';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';

// import { ProveedorModule } from './components/proveedor/proveedor.module';
import { ListProveedorComponent } from './components/proveedor/list-proveedor/list-proveedor.component';
import { EditProveedorComponent } from './components/proveedor/edit-proveedor/edit-proveedor.component';
import { MantProveedorComponent } from './components/proveedor/mant-proveedor/mant-proveedor.component';
import { NewProveedorComponent } from './components/proveedor/new-proveedor/new-proveedor.component';
import { ViewProveedorComponent } from './components/proveedor/view-proveedor/view-proveedor.component';
import { NewProductoComponent } from './components/producto/new-producto/new-producto.component';
import { ListProductoComponent } from './components/producto/list-producto/list-producto.component';
import { GanananciasComponent } from './components/ingresos/ganancias/ganancias.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    SidebarComponent,
    RegisterComponent,
    CategoriasComponent,
    MenuComponent,
    //proveedores
    EditProveedorComponent,
    MantProveedorComponent,
    NewProveedorComponent,
    ListProveedorComponent,
    ViewProveedorComponent,
    //productos
    AdmProductoComponent,
    NewProductoComponent,
    ListProductoComponent,
    GanananciasComponent
  ],
  imports: [
     MaterialModule, 
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    // BrowserModule,
    routing,
    OverlayModule, ReactiveFormsModule,

    // ProveedorModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
