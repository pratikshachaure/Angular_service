import { Component } from '@angular/core';
 import { MyserviceService } from './services/myservice.service';
 import {MatButtonToggleModule} from '@angular/material/button-toggle';
 import {MatRadioModule} from '@angular/material/radio';
 import {MatSliderModule} from '@angular/material/slider';
 import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service_project';
 
  arr:any=[];
  two:any=[];
  third:any=[];
  constructor (private myservice:MyserviceService){
   myservice.myfun().subscribe((data:any)=>{
    this.arr.push(data)
    this.two=this.arr[0].recipes;
    console.log(this.two)
     
    


   });
  

  }
  ;
}
// image id,name mealtype,ingredients[],instruction[],
// rating,serving,tags[];
