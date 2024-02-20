import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [ProductRoutingModule, CommonModule],
  providers: [],
  bootstrap: [],
})
export class ProductModule {}
