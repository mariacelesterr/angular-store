import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { map } from 'rxjs/operators'
import { Observable, observable } from 'rxjs';
import { ProductsComponent } from 'src/app/product/components/products/products.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   //total = 0;
  total$!: Observable<number>;

  constructor(
    private cartService: CartService
  ) { 
    //this is a event listening products on the cart
    /*this.cartService.cart$.subscribe(products => {
      console.log(products)
      this.total = products.length;
    })/*/

    //Better version of the above 
    this.total$ = this.cartService.cart$
      .pipe(
        map(product => product.length)
      )



  }

  ngOnInit(): void {
  }

}
