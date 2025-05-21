import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {
constructor(private _commonService:CommonService){}
  count:number=0;
  
  submit(){
    this._commonService.countSubject.next(this.count)
  }
}
