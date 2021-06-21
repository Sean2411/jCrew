import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../types';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productData: any;
  itemData: any;
  selectedColorCode: string;
  selectedColorName: string;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.productData = JSON.parse(sessionStorage.getItem('productData'));
    const productCode = this.route.snapshot.paramMap.get('id');
    this.itemData = this.getItemData(this.productData, productCode)[0];
    this.selectedColorCode = this.itemData.defaultColorCode;
    this.selectedColorName = this.itemData.colors.filter(c => c.colorCode === this.itemData.defaultColorCode)[0].colorName;
  }

  ngOnInit(): void {

  }

  getItemData(productData, id) {
    return productData.filter(e => e.productCode === id);
  }

  onColorClick(i) {
    this.selectedColorCode = this.itemData.colors[i].colorCode;
    this.selectedColorName = this.itemData.colors[i].colorName;
  }

}
