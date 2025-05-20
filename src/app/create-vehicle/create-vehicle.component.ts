import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {


  constructor(private _vehicleService:VehiclesService, private _router:Router, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
         if(this.id){
          _vehicleService.getVehicle(data.id).subscribe(
              (data:any)=>{
                console.log(data);
                this.vehicleForm.patchValue(data);
              },(err:any)=>{
                alert("unable to fetch vehicle data")
              }
            )
         }
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  id:any='';
  submit(){
    if(this.id){
      this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe((data:any)=>{
          console.log(data);
          alert("Vehicle record updated successfully!");
          this._router.navigateByUrl('/dashboard/vehicles');
        },(err:any)=>{
          alert("Unable to update")
        })
    }else{
      console.log(this.vehicleForm.value);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Vehicle Created Successfully😊");
        this._router.navigateByUrl('/dashboard/vehicles');
      },(err:any)=>{
        alert("internal server error!")
      }
    )
    }
  }

  public vehicleForm:FormGroup= new FormGroup({
    Vehicle:new FormControl(),
    color:new FormControl(),
    cost:new FormControl(),
    fuel:new FormControl(),
    manufacturer:new FormControl(),
    image:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    tyres:new FormControl()
  })

  
}
