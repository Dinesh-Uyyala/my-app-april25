import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutProductComponent } from './about-product/about-product.component';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    AboutProductComponent,
    AboutCeoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
