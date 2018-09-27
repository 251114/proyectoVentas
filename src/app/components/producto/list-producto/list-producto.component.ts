/* import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { Restaurant } from '../../../models/restaurant';
import { GLOBAL } from '../../../services/global';
import { UserService } from '../../../services/user.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css'],
  providers: [RestaurantService, UserService]

})
export class ListProductoComponent implements OnInit {
  public identity;
  public token;
  public url;
  public restaurant: Restaurant;
  public restaurants: Restaurant[] = [];
  public bandera: any = 0;

  constructor(private _restaurantService: RestaurantService, private _userService: UserService, private _route: ActivatedRoute,
    private _router: Router) {
    this.url = GLOBAL.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.restaurant = new Restaurant('', '', '', '', '', '', '', this.identity);

  }

  ngOnInit() {
    this.getRestaurants();
  }

  upRestaurant(idRestaurant: String) {
    this._router.navigate(['/restaurant/' + idRestaurant]);
  }


  editRestaurant(idRestaurant: String) {
    this._router.navigate(['/editrestaurant/' + idRestaurant]);
  }

  getRestaurants() {
    //   this._eventoService.getEventos(this.token, this.identity._id).subscribe(
    this._restaurantService.getRestaurants(this.token).subscribe(
      response => {
        if (!response.restaurants) {
          //  this.aletMessage
        } else {
          this.restaurants = response.restaurants;
          if (this.restaurants.length > 0) {
            this.bandera = 1;
          }
          console.log(this.restaurants);
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
 */