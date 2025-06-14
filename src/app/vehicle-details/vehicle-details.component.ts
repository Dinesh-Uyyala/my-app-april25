import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  id:any='';
  vehicle:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _vehicleService:VehiclesService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        console.log(this.id);
      },(ere:any)=>{
        alert("Internal Server Error!");
      }
    )

    _vehicleService.getVehicle(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicle=data;
      },(err:any)=>{
        alert("Internal Server Error!");
      }
    )
  }

}
