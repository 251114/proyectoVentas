import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Proveedor } from './../models/proveedor';


@Injectable()

export class ProveedorService {

  public url: String;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  saveProveedor(token, proveedor: Proveedor) {

    let json = JSON.stringify(proveedor);
    let params = json;

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });

    return this._http.post(this.url + 'proveedor', params, { headers: headers })
      .map(res => res.json());
  }

  getProveedor(token, proveedorId = null) {

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(this.url + 'proveedor/' + proveedorId, options)
      .map(res => res.json());
  }


  getProveedores(token, user:any) {

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });

    return this._http.get(this.url + 'proveedores/'+user, options)
      .map(res => res.json());
  }



  updateProveedor(token, id: String, proveedor: Proveedor) {

    let json = JSON.stringify(proveedor);
    let params = json;

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });

    return this._http.put(this.url + 'proveedor/' + id, params, { headers: headers })
      .map(res => res.json());
  }

  deleteProveedor(token, id: String) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });

    return this._http.delete(this.url + 'proveedor/' + id, options).map(res => res.json());
  }

}
