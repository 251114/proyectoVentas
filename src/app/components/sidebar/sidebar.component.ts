import { UserService } from './../../services/user.service';
import { Component, OnInit, Output } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArgumentType } from '@angular/compiler/src/core';
import { EventEmitter } from 'protractor';

declare var $:any;


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [UserService]
})

export class SidebarComponent implements OnInit {
  public title = 'salir';
  public errorMessage;

  public identity;
  public token;
  public nameUser: String;

  constructor(private _userService: UserService, private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    if (this.identity) {
      this.nameUser = this.identity.name;
    }
    console.log(this.identity);




    this.sidebar();
    this.dropdown();

  }

  dropdown() {

    [].slice.call(document.querySelectorAll('.dropdown .nav-link')).forEach(function (el) {
      el.addEventListener('click', onClick, false);
    });

    function onClick(e) {
      e.preventDefault();
      var el = this.parentNode;
      el.classList.contains('show-submenu') ? hideSubMenu(el) : showSubMenu(el);
    }

    function showSubMenu(el) {
      el.classList.add('show-submenu');
      document.addEventListener('click', function onDocClick(e) {
        e.preventDefault();
        if (el.contains(e.target)) {
          return;
        }
        document.removeEventListener('click', onDocClick);
        hideSubMenu(el);
      });
    }

    function hideSubMenu(el) {
      el.classList.remove('show-submenu');
    }

  }

  sidebar() {
    $(".sidebar-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });

    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });


  }


  logout() {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this.errorMessage = null;
  }

}
