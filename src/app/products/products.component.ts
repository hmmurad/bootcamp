import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []
  constructor(private _prodService: ProductsService) { }

  ngOnInit(): void {
    this._prodService.geProducts().subscribe(
      data => {
        console.log(data[0].id)
        this.products = data;
      }
    )
  }

}
