import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../core/models/product.model';

import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product?: Product;

  constructor(
    private router: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      const id = params.id;
       //this.product = this.productsService.getProduct(id);
       this.fetchProduct(id);
      //console.log(this.product);
    });
  }
  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => this.product = product)
  }
  createProduct(){
    let newProduct: Product = {
      id: '222',
      title: 'New Product from angular',
      price: 3000,
      description: 'This is a details from Create funtion',
      image: 'assets/images/banner-1.jpg'
    }

    this.productsService.createProduct(newProduct).subscribe(product => console.log(product))
    }
  updateProduct(){
    //Partial is for TS and works for send just part of the Object no the whole object
    let updateP: Partial<Product> = {
      id: '19',
      price: 2000,
      description: 'new description'
    }
    this.productsService.updateProduct('32', updateP).subscribe(
      updateProduct => console.log(updateProduct)
    )
  }
  deleteProduct(){
    this.productsService.deleteProduct('222')
    .subscribe(rsa => console.log(rsa));
  }
  

}
