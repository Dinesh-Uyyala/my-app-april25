import { Component } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {
  name:string='';
    display(data:string){
    this.name=data;
  }
}
