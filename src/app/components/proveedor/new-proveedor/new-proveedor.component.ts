import { Component, OnInit, ViewChild } from '@angular/core';
import { Proveedor } from '../../../models/proveedor';
import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ProveedorService } from './../../../services/proveedor.service';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

declare var JQuery: any;
declare var $: any;


@Component({
  selector: 'new-proveedor',
  templateUrl: './new-proveedor.component.html',
  styleUrls: ['./new-proveedor.component.css'],
  providers: [ProveedorService, UserService]

})
export class NewProveedorComponent implements OnInit {
  tipoControl = new FormControl([Validators.required]);
  tipos = [
    { name: 'ropa hombre' },
    { name: 'ropa mujer' },
    { name: 'accesorios' } 
  ];
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  public identity;
  public title: String = 'Registro de nuevo proveedor';
  public token;
  public url;
  public proveedor: Proveedor;
  public mensajeError: String;
  public imagenTemp: String;

  constructor(private _proveedorServide: ProveedorService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.url = GLOBAL.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.proveedor = new Proveedor('', '', '', '', '', '', '');
  }

  ngOnInit() { }

  saveProveedor() {
    console.log(this.proveedor);
    this._proveedorServide.saveProveedor(this.token, this.proveedor).subscribe(
      response => {
        if (!response.proveedor) {
          swal('Error', 'el proveedor no se guardo correctamente', 'warning');
        }
        else {
          let id_proveedor = response.proveedor._id;
          this.makeFileRequest(this.url + 'upload-img-proveedor/' + id_proveedor, [],
            this.filesToUpload).then(
              (result) => {
                swal('Proveedor registrado', 'Datos guardados correctamente', 'success');
                this._router.navigate(['/mant-proveedor']);
              },
              (error) => {
                console.log(error);
              }
            );
        }
      },
      error => {
        this.mensajeError = error;
        let errorMessage = <any>error;
        if (errorMessage != null) {
          console.log(error);
        }
      }
    );
  }
  //--------------------imagenes--------------

  public filesToUpload: Array<File>;

  fileChangeEvent(fileInput: any, archivo: File) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    let reader = new FileReader();
    let urlImgTemp = reader.readAsDataURL(archivo);
    reader.onloadend = () => {
      console.log(reader.result);
      this.imagenTemp = reader.result;
    };
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    var token = this.token;

    return new Promise(function (resolve, reject) {
      var formData: any = new FormData;
      var xhr = new XMLHttpRequest();

      for (var i = 0; i < files.length; i++) {
        formData.append('imagen', files[i], files[i].name);
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);
    });

  }


}
