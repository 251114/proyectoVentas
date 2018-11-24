import { Proveedor } from './../../../models/proveedor';
import { ProveedorService } from './../../../services/proveedor.service';
import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

declare var JQuery: any;
declare var $: any;


@Component({
  selector: 'mant-proveedor',
  templateUrl: './mant-proveedor.component.html',
  styleUrls: ['./mant-proveedor.component.css'],
  providers: [ProveedorService, UserService]

})
export class MantProveedorComponent implements OnInit {
  public identity: any;
  public token;
  public url;
  public _idRestaurant: String;
  proveedores: Proveedor[] = [];

  constructor(private _proveedorService: ProveedorService, private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.url = GLOBAL.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }

  ngOnInit() {
    this.getProveedores();
  }

  editProveedor(idProveedor: String) {
    this._router.navigate(['/edit-proveedor/' + idProveedor]);
  }

  getProveedores() {
    this._proveedorService.getProveedores(this.token,this.identity._id).subscribe(
      response => {
        if (!response.proveedores) {

        } else {
          this.proveedores = response.proveedores;
          console.log(this.proveedores);
        }

      },
      error => {

      }
    );
  }

  deleteProveedor(idProveedor: String) {
    console.log(idProveedor);
    this._proveedorService.deleteProveedor(this.token, idProveedor).subscribe(
      response => {
        if (!response.proveedor) {
          swal('Lo sientimos','El proveedor no pudo ser eliminado','warning');

        } else {
          swal('proveedor eliminado','Información del proveedor eliminada exitosamente','success');
          this.getProveedores();
        }

      },
      error => {

      }
    );
  }

  
}
