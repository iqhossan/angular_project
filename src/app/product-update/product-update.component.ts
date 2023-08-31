import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent implements OnInit {
  id:number;
  product: Product = new Product();
  
  constructor(private productService:ProductService, 
    private route:ActivatedRoute,
    private router:Router){
    this.id=0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.productService.getProductById(this.id).subscribe(
      data => {
        this.product = data;
      },
    error => console.log(error));
  }

  goToList(){
    this.router.navigate(['/products']);
  }

  onSubmit(){
    this.productService.updateProduct(this.id,this.product)
    .subscribe(
      data => { 
      this.goToList();
    }, 
    error => console.log(error));
  }
}
