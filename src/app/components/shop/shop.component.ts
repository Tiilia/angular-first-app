import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public products: any[] = [
    { title: "product 1", price: 2.5 },
    { title: "product 2", price: 5 },
    { title: "product 3", price: 25 },
  ]

  public get total(): number { return this._cartService.total; }

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
  }

}
