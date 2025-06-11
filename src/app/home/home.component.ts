import { Component } from '@angular/core';
import { User } from '../user';
import { VehiclesComponent } from '../vehicles/vehicles.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(VehiclesComponent, {
      width: '950px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  cartCount:number=0
  addToCart(){
    this.cartCount=this.cartCount+1;
  }
  removeFromCart(){
    this.cartCount=this.cartCount-1;
  }
}
