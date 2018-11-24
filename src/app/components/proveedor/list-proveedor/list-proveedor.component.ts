import { UserService } from './../../../services/user.service';
import { Component ,OnInit} from '@angular/core';
import {Proveedor} from '../../../models/proveedor';
import { ProveedorService } from './../../../services/proveedor.service';
import { GLOBAL } from '../../../services/global';
import {Router,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-list-proveedor',
  templateUrl: './list-proveedor.component.html',
  styleUrls: ['./list-proveedor.component.css'],
  providers: [ProveedorService,UserService]
})
export class ListProveedorComponent implements OnInit {
public identity;
public token;
public url;
public proveedor:Proveedor;
public proveedores:Proveedor[]=[];
public bandera:any=0;

constructor(private _proveedorServe:ProveedorService,
             private _userService:UserService,
             private _route:ActivatedRoute,
             private _router:Router) {
    this.url=GLOBAL.url;
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
   }

  ngOnInit() {
      this.getProveedores();
  } 

upProveedor(idProveedor:String){
  let id = idProveedor;
  console.log(id);
  this._router.navigate(['/view-proveedor/'+id]);
}

getProveedores()
{                 
   	   this._proveedorServe.getTProveedores(this.token).subscribe(
          response =>{
            if(!response.proveedores){
                //  this.aletMessage
              }else{
                  this.proveedores= response.proveedores;
                  console.log(this.proveedores);
               }  
          },
        error =>{
          var errorMessage = <any>error;
          if(errorMessage!=null){
            console.log(error);
           }
        }
   );
  }
}
