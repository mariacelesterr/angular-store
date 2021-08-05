import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms'
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service'
import { MyValidaytors}  from '../../../Utils/validators'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form!: FormGroup;
  id: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activedRouter: ActivatedRoute
  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
    this.activedRouter.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(product => {
        //we use patchVale to assign all the values (product) to the form 
        this.form.patchValue(product);
      })

    })
  }

  saveProduct(event: Event){
    //console.log(this.form.value);
    //good practice take off default
   event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
        .subscribe(newProduct => {
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        })

    }

  }

  //To build the whole form
  private buildForm(){
    this.form = this.formBuilder.group({ 
      title: ['', Validators.required],
      price: ['', [Validators.required, MyValidaytors.isPriceValid]],
      image: [''],
      description: ['', Validators.required]

    })
  }

  get priceFild(){
   return  this.form.get('price');
  }

}
