
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:8081/api/v1/product";

  constructor(private httpClient:HttpClient) { }

  getProductList():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  createProduct(product:Product):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, product);
  }

  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  updateProduct(id:number, product:Product):Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseURL}/${id}`,product);
  }

  deleteProduct(id:number):Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${id}`);
  }
}
