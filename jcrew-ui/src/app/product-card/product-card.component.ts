import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../types';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() item: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
