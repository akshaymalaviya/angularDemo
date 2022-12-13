import { ProductDataService } from './../../../../services/product-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _productService: ProductDataService) {}
  products: any;
  ngOnInit(): void {
    this._productService.products().subscribe((productData) => {
      this.products = productData?.products;
      console.log('products:: ', this.products);
    });
  }
}
