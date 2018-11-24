
 import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../services/global';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
declare const swal:any;


@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.component.html',
  styleUrls: ['./ganancias.component.css'],
  providers: [UserService]
})
export class GanananciasComponent implements OnInit {

public identity;
public token;
public url;
public ganancias:any[]=[ 
  {}

];
public _idEvento:String;
  constructor(
        private _route:ActivatedRoute,
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
  this.ganancias=[
    {usuario:'Juan Manuel', fecha:'16/10/2018', hora:'12:35', prenda:'Pantalón Jean', cantidad:2, ganancia:50},
    {usuario:'María Lopez', fecha:'21/10/2018', hora:'2:40', prenda:'Vestido Floreado', cantidad:4, ganancia:90},
    {usuario:'Sofia Mendoza', fecha:'24/10/2018', hora:'3:10', prenda:'Chompa de Lana', cantidad:10, ganancia:200},
    {usuario:'Joaquin Torres', fecha:'2/11/2018', hora:'4:30', prenda:'Camisa invierno', cantidad:5, ganancia:140},
    {usuario:'Erika Chavez', fecha:'11/11/2018', hora:'11:14', prenda:'Casaca de cuero', cantidad:8, ganancia:100},
    {usuario:'Carlos Lujan', fecha:'20/11/2018', hora:'9:30', prenda:'Short primavera', cantidad:15, ganancia:320},
  ]
}
}
 