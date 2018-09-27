import { NewProveedorComponent } from './new-proveedor/new-proveedor.component';
import { MantProveedorComponent } from './mant-proveedor/mant-proveedor.component';
import { RouterModule ,Routes } from "@angular/router";
import { EditProveedorComponent } from './edit-proveedor/edit-proveedor.component';


const proveedorRoutes:Routes = [
    {path:'edit-proveedor/:id', component: EditProveedorComponent},
    {path:'mant-proveedor', component: MantProveedorComponent},
    {path:'new-proveedor', component: NewProveedorComponent}
]

export const PROVEEDOR_ROUTES = RouterModule.forChild(proveedorRoutes);