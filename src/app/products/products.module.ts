import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatModule } from '../mat/mat.module';
import { CategoriesComponent } from './sidenav/categories/categories.component';




@NgModule({
  declarations: [ProductsComponent, SingleProductComponent, ProductDetailComponent, AddProductComponent, SidenavComponent, CategoriesComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatModule
  ],
})
export class ProductsModule { }
