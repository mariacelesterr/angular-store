import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartComponent } from './cart/cart.component';

import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module'

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule} from '@angular/fire/storage';



import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    AdminModule,
    HttpClientModule,
    OrderModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
