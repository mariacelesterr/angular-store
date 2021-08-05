import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/models/product.model'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:  Product[] = []
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.fetchProductList()
  }

  fetchProductList(){
    return this.productsService.getProducts()
    .subscribe(products => this.products = products ) 

  }
  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
      .subscribe(
        (product ) => { console.log(product)}
      )
  }

}
