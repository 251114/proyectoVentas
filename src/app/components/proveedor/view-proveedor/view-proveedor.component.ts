import { Proveedor } from './../../../models/proveedor';
import { ProveedorService } from './../../../services/proveedor.service';
import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router'; 
import { UserService } from 'src/app/services/user.service';

declare const swal:any;
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'view-proveedor',
  templateUrl: './view-proveedor.component.html',
  styleUrls: ['./view-proveedor.component.css'],
  providers: [ProveedorService, UserService]

})
export class ViewProveedorComponent implements OnInit {
  public title = 'Investigación';
  public identity;
  public token;
  public url;
  public imagen: String;
  public proveedor: Proveedor;
  public _idProveedor: String;
 
  constructor(private _proveedorService: ProveedorService,
              private _userService:UserService,
              private _route:ActivatedRoute,
              private _router:Router) {
            this.url=GLOBAL.url;
            this.token = this._userService.getToken();
            this.identity = this._userService.getIdentity();
            this.proveedor=new Proveedor('','','','','','','',this.identity._id);
     }

  ngOnInit() {
    this.getIdProveedorUrL();
  }


  getIdProveedorUrL() {
    this._route.params.forEach((params: Params) => {
      console.log("getEtapaUrl",params);

      if (params['id']) {
        this._idProveedor = params['id'];
        this.getProveedor();
      }
       
    })
  }

  getProveedor() {
    this._proveedorService.getProveedor(this.token, this._idProveedor).subscribe(
      response => {
        if (!response.proveedor) {
          //  this.aletMessage
        } else {
          this.proveedor = response.proveedor;
          this.imagen = this.proveedor.imagen;  
          console.log(this.proveedor);
        }
      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          console.log(error);
        }
      }
    );
  } 

}
