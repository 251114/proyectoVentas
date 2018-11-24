import { UserService } from 'src/app/services/user.service';
import { ProductoService } from './../../../services/producto.service';
import { Producto } from './../../../models/producto';
 import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../services/global';
import {MatDialog} from '@angular/material'
import {Router,ActivatedRoute, Params} from '@angular/router';
declare const swal:any;


@Component({
  selector: 'app-adm-producto',
  templateUrl: './adm-producto.component.html',
  styleUrls: ['./adm-producto.component.css'],
  providers: [ProductoService,UserService]
})
export class AdmProductoComponent implements OnInit {

public identity;
public token;
public url;
public band_editar:boolean;
public productos:Producto[]=[ ];
public _idEvento:String;
  constructor(
        private _productoService:ProductoService, private _route:ActivatedRoute,
        private _router:Router,
        private _userService:UserService) {
        this.url=GLOBAL.url;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
     }

  ngOnInit() {
    this.getProductos();
  }
 
public cantidad:any=0;
getProductos()
{                  
      this._productoService.getProductos(this.token, this.identity._id).subscribe(
          response =>{
            if(!response.productos){
              }else{
                  this.productos= response.productos;
                  this.cantidad=this.productos.length;
               }  
          },
        error =>{
        }
   );
  }
  
  deleteProducto(idProducto:any){
    this._productoService.deleteProducto(this.token, idProducto).subscribe(
      response =>{
          if(!response.producto){
            swal('Error','El producto no se elimino correctamente','warning');
          }else{
            this.getProductos();
            swal('Producto eliminado','El producto se elimino correctamente','success');
          }
        },
          error =>{
        }
      );
  }
}
 