import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any=[];
  dataLoading:Boolean=true;
  constructor(private _vehicleService:VehiclesService){
    this.loadVehicles();
  } 

  searchControl = new FormControl();

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000), // Wait for 1 second after the last keystroke
        switchMap(search => this._vehicleService.filteredVehicles(search))
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          // this.vehicles = data;
        },
        (err: any) => {
          alert("Internal Server Error");
        }
      );
  }

  loadVehicles(){
    this._vehicleService.getVehicles().subscribe((data:any)=>{
      console.log(data);
      this.vehicles=data;
      this.dataLoading=false;
      console.log(this.vehicles);
    },(err:any)=>{
      alert("Internal Sever Error!");
      this.dataLoading=false;
    }

    )
  }

  delete(id:number){
    if(confirm("Are you sure to delete?")==true){
      this._vehicleService.deleteVehicle(id).subscribe(
        (data:any)=>{
          alert("Record deleted successfully!");
          this.loadVehicles();
        },(err:any)=>{
          alert("Internal Server Error!");
        }
      )
    }else{
      alert("You have cancelled delete")
    }    
  }
  
  keywords:any='';
  search(){
    this._vehicleService.filteredVehicles(this.keywords).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data
      },(err:any)=>{
        alert("Internal Sever Error!")
      }
    )
  }

  column:any='';
  order:any='';
  sort(){
    this._vehicleService.sortedVehicles(this.column,
      this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data
      },(err:any)=>{
        alert("Internal Sever Error!")
      }
    )
  }


  // pagination
  limit:number=0;
  page:number=0;
  pagination(){
    this._vehicleService.paginatedVehicles(this.limit,this.page)
    .subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("internal server error!")
      }
    )
  }


}
