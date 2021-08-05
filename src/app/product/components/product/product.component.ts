import { Component, 
  Input, 
  OnInit, 
  Output, 
  EventEmitter, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  OnDestroy} from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

  today = new Date;

  constructor( private cartService: CartService ){

    console.log('1. Constructor');

  }

  // ngOnChanges(changes: SimpleChanges){
  //   console.log('2. ngOnChanges');
  //   console.log(changes);
  // }

  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  ngDoCheck(){
    console.log('4. ngDoCheck');
  }

  ngOnDestroy(){
    console.log('5. ngOnDestroy');
  }
  
// @Input es para recibir info del otro component 
  // @Input es para recibir info del otro component 
  @Input() product!: Product;
//@Output para enviar info desde el component + EvenEmitter es un evento
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart(){
    //this.productClicked.emit(this.product.id)
    console.log('adding to the cart');
    this.cartService.addCart(this.product);
  }


}
