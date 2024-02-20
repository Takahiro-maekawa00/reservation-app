import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // this.product = this.productService.getProductById(params.get('productId')!);
      const productObservable = this.productService.getProductById(params.get('productId')!);
      productObservable.subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (err) => {}
      })
    });
  }
}
