import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }
  login(event: Event){
    event.preventDefault();
    if(this.form.valid){
      console.log(this.form.value);
      const value = this.form.value;
      this.authService.login(value.email, value.password)
        .then( () => {
          this.router.navigate(['/admin']);
      })
      .catch(() => {
        alert('User is not valid');
      })

    }

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

}
