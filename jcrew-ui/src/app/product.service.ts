import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData = new BehaviorSubject({});
  constructor(private http: HttpClient) { }

  getProductData() {
    const url = "http://localhost:8000/api";
    return this.http.get(url);
  }

  removeDuplications(data, idStr) {
    let set = new Set();
    return data.reduce((a, c) => {
      let size = set.size;
      set.add(c[idStr]);
      if (size !== set.size) a.push(c);
      return a;
    }, [])
  }
}
