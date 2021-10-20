import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _apiUrl = 'api/products'

  constructor(private http: HttpClient) { }

  geProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._apiUrl)
  }
  geProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this._apiUrl}/${id}`)
  }


  getCategories() {    
  const _apiUrl = 'api/categories'
    return this.http.get(_apiUrl)
  }
  getProductsCategory(categoryId: number) {    
  const _apiUrl = 'api/categories'
    return this.http.get(`${_apiUrl}/${categoryId}`)
  }

}
