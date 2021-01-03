import { Component, OnInit } from '@angular/core';
import { ProductService } from '../appService/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  products = [
    {
      name: 'Mobile',
      price: 34
    },
    {
      name: 'Television',
      price: 12
    },
    {
      name: 'Washing Machine',
      price: 345
    }
  ]
  constructor( private prodService: ProductService) { }

  ngOnInit(): void {
  }
  onAddProducts(name, price) {
    this.products.push({
      name:name.value,
      price: price.value
    })
  }

  onSaveProducts(){
    this.prodService.saveProduct(this.products).subscribe(
      response => console.log(response),
      error => console.log(error)
    )

  }

  onFetchProducts(){

  }

  onDeleteProduct(i) {
    if(confirm('Do you want to delete this product?')){
      this.products.splice(i,1)
    }
  }

}
