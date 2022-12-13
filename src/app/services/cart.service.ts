import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItem: any = [];
  constructor() {
    this.cartItem = localStorage.getItem('demoCart');
    if (localStorage.getItem('demoCart') == null) {
      this.cartItem = [];
    } else {
      this.cartItem = JSON.parse(this.cartItem as string);
    }
  }

  addToCart(product: any) {
    this.cartItem.push(product);
    console.log(this.cartItem);
    localStorage.setItem('demoCart', JSON.stringify(this.cartItem));
    console.log('###', JSON.parse(localStorage.getItem('demoCart') as string));
  }

  getItems() {
    return JSON.parse(localStorage.getItem('demoCart') as any);
  }

  checkItems(product: any) {
    const index: number = this.cartItem.indexOf(product);
    console.log('GGG', index);
    return index;
  }

  removeFromCart(product: any) {
    const index = this.cartItem.indexOf(product);
    this.cartItem.splice(index, 1);
    localStorage.setItem('demoCart', JSON.stringify(this.cartItem));
  }
}
