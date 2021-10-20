import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  @Input() products: any;

  constructor(private _prodService: ProductsService) { }

  ngOnInit(): void {
  }

  onDetailPage(id: number) {
    this._prodService.geProduct(id).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
