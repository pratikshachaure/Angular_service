import { Component } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  info:any;
  constructor(private myservice:MyserviceService){
    this.info=myservice.myfun();
    console.log( this.info);

  }

}
