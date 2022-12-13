import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  constructor(private http: HttpClient) {}
  products(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }
  productDetail(proId: number): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${proId}`);
  }
}
