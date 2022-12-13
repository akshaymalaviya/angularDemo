import { CartService } from './../../../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: any;

  constructor(private _cartItem: CartService) {}

  ngOnInit(): void {
    this.cartList = this._cartItem.getItems();
    console.log(this.cartList);
  }

  removeItem(item: any) {
    if (confirm('Are you sure you wont to remove the item from the cart?')) {
      this._cartItem.removeFromCart(item);
    }
    this.ngOnInit();
  }
}
