import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { CardComponent } from './card/card.component';
import { UpiComponent } from './upi/upi.component';
import { CodComponent } from './cod/cod.component';


@NgModule({
  declarations: [
    CardComponent,
    UpiComponent,
    CodComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
