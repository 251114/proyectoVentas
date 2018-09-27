import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Comentario } from '../models/comentario';


@Injectable()

export class ComentarioService {

  public url: String;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  saveComentario(token, comentario: Comentario) {

    let json = JSON.stringify(comentario);
    let params = json;

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });

    return this._http.post(this.url + 'comentario', params, { headers: headers })
      .map(res => res.json());
  }

  getComentario(token, comentarioId = null) {

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });

    if (comentarioId == null) {
      return this._http.get(this.url + 'getComentarios', options)
        .map(res => res.json());
    } else {
      return this._http.get(this.url + 'comentarios/' + comentarioId, options)
        .map(res => res.json());
    }
  }

  getComentarios(token, usuarioId = null) {

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });

    if (usuarioId == null) {
      return this._http.get(this.url + 'getComentarios', options)
        .map(res => res.json());
    } else {
      return this._http.get(this.url + 'getcomentarios/' + usuarioId, options)
        .map(res => res.json());
    }
  }

  getComentariosxRestaurant(token, restaurantId = null) {

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });

    if (restaurantId == null) {
      return this._http.get(this.url + 'comentarios', options)
        .map(res => res.json());
    } else {
      return this._http.get(this.url + 'comentarios/' + restaurantId, options)
        .map(res => res.json());
    }
  }

  getComentariosxUsuario(token, usuarioId = null) {

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });

  /*   if (usuarioId == null) {
      return this._http.get(this.url + 'comentarios', options)
        .map(res => res.json());
    } else { */
      return this._http.get(this.url + 'comentariosUser/' + usuarioId, options)
        .map(res => res.json());
    // }
  }


  updateComentario(token, id: String, comentario: Comentario) {

    let json = JSON.stringify(comentario);
    let params = json;

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });

    return this._http.put(this.url + 'comentario/' + id, params, { headers: headers })
      .map(res => res.json());
  }

  deleteComentario(token, id: String) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let options = new RequestOptions({ headers: headers });

    return this._http.delete(this.url + 'comentario/' + id, options).map(res => res.json());
  }

}
