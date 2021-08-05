//We made this module to implement Lazy Load 
//and reduce load in main.js  and reduce 10 sec of loading home page

import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms'

import { BannerComponent } from "./components/banner/banner.component";
import { HomeComponent } from "./components/home/home.component";

import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
    ]
})

export class HomeModule {}