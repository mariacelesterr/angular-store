import { Injectable } from '@angular/core';
//we used this for reactive programing
import { BehaviorSubject } from 'rxjs'
import { Product } from '../models/product.model'
@Injectable({
  providedIn: 'root'
})
export class CartService {

private product: Product[] = [];

//this is a var type observable, to listening a event
private cart = new BehaviorSubject<Product[]>([]);

//this will be a a public variable to use in otres components 
cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product){
    this.product = [...this.product, product];
    this.cart.next(this.product);
  }

}
