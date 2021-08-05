import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service'
import { MyValidaytors}  from '../../../Utils/validators'

import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;
  image$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event){
    //console.log(this.form.value);
    //good practice take off default
   event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product)
        .subscribe(newProduct => {
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        })

    }

  }

  uploadFile(event: Event){
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    //name is a folder (carpeta)
    const name = 'image.png';
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
      .pipe(
        finalize(
          () => {
            this.image$ = fileRef.getDownloadURL()
            this.image$.subscribe(downloadURL => { 
              console.log(downloadURL);
              this.form.get('image')?.setValue(downloadURL);
            })
          })
      ).subscribe();


  }

  //To build the whole form
  private buildForm(){
    this.form = this.formBuilder.group({ 
      id: ['', Validators.required],
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
