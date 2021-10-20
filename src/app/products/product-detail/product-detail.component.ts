import { Location } from '@angular/common';
import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: Product;
  constructor(private route: ActivatedRoute, private _prodService: ProductsService, private loc: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.id = +params['id']
        console.log(this.id)
        this.getProduct()
      }
    )
  }

  getProduct() {
    this._prodService.geProduct(this.id).subscribe(
      data => {
        this.product = data
        console.log(this.product)
      }
    )
  }

  onBack() {
    this.loc.back()
  }

}
