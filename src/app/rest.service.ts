import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Products } from './Products';

@Injectable({
  providedIn: 'root'
})
export class RestService {
private url : string

  constructor(private http : HttpClient ) { 
    this.url = `http://localhost:4200/dashboard`;
  }

  

  getProducts(){
console.log("url", this.url)    
    return this.http.get<Products[]>(this.url);
  }
 
}
