import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ProductDetailComponent } from "../product/components/product-detail/product-detail.component";

import { HomeComponent } from "./components/home/home.component";

const routes: Routes =[
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'id',
        component: ProductDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports:[ 
        RouterModule
    ]
})

export class HomeRoutingModule {}
