import { ProductDataService } from './../../../../services/product-data.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from './../../../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  cartItem: any;
  btnValue: number = 0;

  constructor(
    private route: ActivatedRoute,
    private _productService: ProductDataService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this._productService
      .productDetail(productIdFromRoute)
      .subscribe((productDetail) => {
        this.product = productDetail;
        console.log('product', this.product);
      });
  }

  addToCart(product: any) {
    this._cartService.addToCart(product);
    window.alert('Your product has been added!');
  }
}
