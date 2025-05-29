import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy{
  // constructor(){
  //   console.log("Constructor Running");
  // }
  ngOnDestroy(): void {
    console.log("Destroy running");
    clearInterval(this.intervalId);
  }
  ngAfterContentInit(): void {
    console.log("aftercontentinit running");
  }
ngDoCheck(): void {
    console.log("docheck is running");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Running");
  }
   ngAfterViewInit(): void {
    console.log("afterviewinit running");
  }
  ngAfterViewChecked(): void {
    console.log("afterviewchecked running");
  }
  public intervalId:any;
  ngOnInit(): void {
    // console.log("Oninit is running");

   this.intervalId= setInterval(()=>{
      console.log("Timer is Running");
    },3000)
  }
  
  
  ngAfterContentChecked(): void {
    console.log("aftercontentchecked running");
  }
 
  
}
