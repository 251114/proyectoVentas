import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { GLOBAL } from './global';
import { User } from '../models/user';


@Injectable()

export class UserService {

  public url: String;
  public identity;
  public token: string;
  public usuario: User;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
    this.usuario = new User('','','','','','','','','','','','');

  }


  getUser(token: String, id: any) {
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    const options = new RequestOptions({ headers: headers });

    return this._http.get(this.url + '/user/' + id, options).map(res => res.json());
  }

  updateUser(token, id: String, user: User) {

    const json = JSON.stringify(user);
    const params = json;

    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });

    return this._http.put(this.url + 'user/' + id, params, { headers: headers })
      .map(res => res.json());
  }

  saveUser(token, user: User) {

    let json = JSON.stringify(user);
    let params = json;

    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });

    return this._http.post(this.url + 'saveUser', params, { headers: headers })
      .map(res => res.json());
  }



  loginUser(user_to_login, gethash = null) {
    console.log(user_to_login);
    if (gethash != null) {
      user_to_login.gethash = gethash;
    }
    const json = JSON.stringify(user_to_login);
    const params = json;

    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this._http.post(this.url + 'loginUser', params, { headers: headers })
      .map(res => res.json());

  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));

    if (identity != 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }


  getToken() {
    const token = localStorage.getItem('token');

    if (token != 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;

  }

  guardarStorage(id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('identity', JSON.stringify(user));
    console.log(user);
    this.usuario = user;
    this.token = token;
    console.log(this.usuario);

  }

}
