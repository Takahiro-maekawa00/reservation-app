import { Component } from '@angular/core';
import { ProductService } from '../shared/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss'],
})
export class ProductListComponent {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {

    const productObservable = this.productService.getProducts();
    productObservable.subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('something wrong occurred: ' + err);
      }
    }
    );
  }
}
