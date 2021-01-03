import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "https://hmmkdy.firebaseio.com/products.json"

  private headers = new HttpHeaders({'content-type': 'hmmuradapplication/json'})

  constructor( private http: HttpClient) { }

  saveProduct(products: any[]) {
    return this.http.put(this.url, products, {headers: this.headers})
  }

}
