import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Imagen } from '../models/imagen';


@Injectable()

export class ImagenService {

  public url: String;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  saveImagen(token, imagen: Imagen) {

    let json = JSON.stringify(imagen);
    let params = json;

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });

    return this._http.post(this.url + 'imagen', params, { headers: headers })
      .map(res => res.json());
  }

  getImagen(token, imagenId = null) {

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });

    if (imagenId == null) {
      return this._http.get(this.url + 'imagen', options)
        .map(res => res.json());
    } else {
      return this._http.get(this.url + 'imagen/' + imagenId, options)
        .map(res => res.json());
    }
  }

 /*  getImagenesxU(token, usuarioId = null) {

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });

    if (usuarioId == null) {
      return this._http.get(this.url + 'getComentarios', options)
        .map(res => res.json());
    } else {
      return this._http.get(this.url + 'getcomentarios/' + usuarioId, options)
        .map(res => res.json());
    }
  } */

  getImagenesxRestaurant(token, restaurantId = null) {

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });


      return this._http.get(this.url + 'imagenes/' + restaurantId, options)
        .map(res => res.json());
  }

 /*  getComentariosxUsuario(token, usuarioId = null) {

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });


      return this._http.get(this.url + 'comentariosUser/' + usuarioId, options)
        .map(res => res.json());
  }
 */

  updateImagen(token, id: String, imagen: Imagen) {

    let json = JSON.stringify(imagen);
    let params = json;

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });

    return this._http.put(this.url + 'imagen/' + id, params, { headers: headers })
      .map(res => res.json());
  }

  deleteComentario(token, id: String) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });

    return this._http.delete(this.url + 'imagen/' + id, options).map(res => res.json());
  }

}
