import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) {
    
   }
  myfun(){

    return this.http.get("https://dummyjson.com/recipes");
  }
}
