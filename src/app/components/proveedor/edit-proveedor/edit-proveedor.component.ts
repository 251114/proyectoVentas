import { Proveedor } from './../../../models/proveedor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProveedorService } from '../../../services/proveedor.service';
import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

declare var JQuery: any;
declare var $: any;


@Component({
  selector: 'edit-proveedor',
  templateUrl: './edit-proveedor.component.html',
  styleUrls: ['./edit-proveedor.component.css'],
  providers: [ProveedorService, UserService]

})
export class EditProveedorComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  tipoControl = new FormControl([Validators.required]);
  tipos = [
    { name: 'ropa hombre' },
    { name: 'ropa mujer' },
    { name: 'accesorios' }
  ];

  public identity;
  public title: String = 'Edición de datos del proveedor';
  public token;
  public url;
  public proveedor: Proveedor;
  public mensajeError: String;
  // public _idRestaurant: String;
  public imagenTemp: any;
  restaurantId: string;


  constructor(private _proveedorService: ProveedorService, private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
    this.proveedor = new Proveedor('', '', '', '', '', '', '',this.identity._id);
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.gerProveedorUrl();
    this.getProveedor();
  }

  public proveedorId:String='';
  gerProveedorUrl() {
    this._route.params.forEach((params: Params) => {
      if (params['id']) {
        this.proveedorId = params['id'];
      }
    });
  }

  editProveedor() {
    this._proveedorService.updateProveedor(this.token, this.proveedorId, this.proveedor).subscribe(
      response => {
        if (!response.proveedor) {
          swal('Lo sientimos', 'Información no moficada', 'warning');

        } else {
          

            if (!this.filesToUpload) {
              swal(
                "Proveedor modificado",
                "El proveedor fue modificado correctamente",
                "success"
              );
              this._router.navigate(["/mant-proveedor"]);
            } else {
              this.makeFileRequest(
                this.url + "upload-img-proveedor/" + response.proveedor._id,
                [],
                this.filesToUpload
              ).then(
                result => {
                  swal(
                    "´Proveedor modificado",
                    "El proveedor fue modificado correctamente",
                    "success"
                  );
                  this._router.navigate(["/mant-proveedor"]);
                },
                error => {
                  console.log(error);
                }
              );
            }
        }
      },
      error => {


      });
  }

  getProveedor() {
    this._proveedorService.getProveedor(this.token, this.proveedorId).subscribe(
      response => {
        if (!response.proveedor) {
        } else {
          this.proveedor = response.proveedor;
          console.log(this.proveedor);
          //    this.imagenTemp=this.restaurant.imagen;
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

  filesToUpload: Array<File>;

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
