import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService,
    private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    this.productService.createProduct(this.product)
    .subscribe(
      data => { 
      this.goToList();
    }, 
    error => console.log(error));
  }

  goToList(){
    this.router.navigate([`/products`]);
  }

}
