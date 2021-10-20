import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  categories: any;

  constructor( private _prodService: ProductsService) { }

  ngOnInit(): void {
    this._prodService.getCategories().subscribe(
      data => {
        console.log(data)
        this.categories = data
      }
    )
  }

}
