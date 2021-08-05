import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, PreloadingStrategy } from '@angular/router';


import {  LayoutComponent }  from './layout/layout.component'

//Guardians 
import { AdminGuard } from './admin.guard'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    //vistas anidadas, esto pasa para que heather and footer esten siempre en los diferente vistas
    children:[
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        //component: HomeComponent
        //we used this to implement the module insted of component
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import ('./contact/contact.module').then(m => m.ContactModule)
      },
      /*
      {
        path: 'product',
        component: ProductsComponent
      },
      { 
        //Always remember " : "  
        path: 'product/:id',
        component: ProductDetailComponent
      },*/
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)

      }

    ]
  },

  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    //when there is not match on the routes **
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  //PreloadAllModules is for pre load modules after load main.js
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
