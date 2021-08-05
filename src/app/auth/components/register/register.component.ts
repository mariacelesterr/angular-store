import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  signin(event: Event){
    event.preventDefault();
    if(this.form.valid){
      console.log(this.form.value);
      const value = this.form.value;
      this.authService.createUser(value.email, value.password)
      .then( () => {
        this.router.navigate(['/auth/login']);
      } )


    }

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

}
