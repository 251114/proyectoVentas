import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProveedorComponent } from './edit-proveedor/edit-proveedor.component';
import { NgModule } from "@angular/core";
import { MantProveedorComponent } from './mant-proveedor/mant-proveedor.component';
import { NewProveedorComponent } from './new-proveedor/new-proveedor.component';
import { PROVEEDOR_ROUTES } from './proveedor.routes';
import { MaterialModule } from '../../shared/modules/material.module';
import { HttpModule } from '@angular/http';



@NgModule({
    declarations:[
        EditProveedorComponent,
        MantProveedorComponent,
        NewProveedorComponent
    ],
    exports:[
        EditProveedorComponent,
        MantProveedorComponent,
        NewProveedorComponent
    ],
    imports:[
    MaterialModule, 
    FormsModule,
    // CommonModule,
    // HttpModule,
    ReactiveFormsModule ,
    

        PROVEEDOR_ROUTES
    ]
})

export class ProveedorModule { }