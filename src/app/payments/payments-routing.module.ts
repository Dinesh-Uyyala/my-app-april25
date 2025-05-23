import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpiComponent } from './upi/upi.component';
import { CardComponent } from './card/card.component';
import { CodComponent } from './cod/cod.component';

const routes: Routes = [
  {path:'upi',component:UpiComponent},
  {path:'card',component:CardComponent},
  {path:'cod',component:CodComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
