import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() a:string='';

  @Output() bEvent:EventEmitter<number>=new EventEmitter();

  send(){
    this.bEvent.emit(20);
  }


  @Input() role:string='';

name:string='';
@Output() nameEvent:EventEmitter<string>=new EventEmitter();
submit(){
  this.nameEvent.emit(this.name);
}

}
