import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jcrew-ui';
  productsData: Product;
  subscription = new Subscription();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.productService.getProductData().subscribe(d => {
        this.productsData = this.productService.removeDuplications(d["productList"][0]["products"], 'productId');
        sessionStorage.setItem('productData', JSON.stringify(this.productsData));
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
