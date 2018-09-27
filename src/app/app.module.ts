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

import { ProveedorModule } from './components/proveedor/proveedor.module';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    SidebarComponent,
    RegisterComponent,
    CategoriasComponent
  ],
  imports: [
     MaterialModule, 
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    // BrowserModule,
    routing,
    OverlayModule, ReactiveFormsModule,

    ProveedorModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
