import { Component, OnInit } from '@angular/core';
import { Product } from '../types'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsData: Product;

  constructor() { }

  ngOnInit(): void {
    this.productsData =  JSON.parse(sessionStorage.getItem('productData'));
  }

}
