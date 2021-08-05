import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { FooterComponent } from '././components/footer/footer.component';
import { HeaderComponent } from '././components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { MatBadgeModule } from '@angular/material/badge';
import { ReactiveFormsModule } from "@angular/forms"




@NgModule({
  declarations: [
    HighlightDirective,
    ExponentialPipe,
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    HighlightDirective,
    ExponentialPipe,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatBadgeModule,
    ReactiveFormsModule 
    
  ]
})
export class SharedModule { }
