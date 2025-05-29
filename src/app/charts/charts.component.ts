import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
isDataLoading:boolean=false;
states:any=['AP','Telangana','Karnataka','Kerala'];
}
