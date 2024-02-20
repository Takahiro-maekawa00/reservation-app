import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/products.service';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [ProductRoutingModule, CommonModule],
  providers: [ProductService],
  bootstrap: [],
})
export class ProductModule {}
