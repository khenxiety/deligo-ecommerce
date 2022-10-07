import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SampleProductsService {
  constructor(private http: HttpClient) {}

  getStore() {
    return this.http.get('https://api.escuelajs.co/api/v1/products');
  }

  getcategories() {
    return this.http.get('https://api.escuelajs.co/api/v1/categories');
  }
}
