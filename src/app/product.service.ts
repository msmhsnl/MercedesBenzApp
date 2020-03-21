import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  webApiData;

  GetProducts(model): Product[] { 
   
  this.http.get('http://localhost:64895/api/Model/GetProductsByModel/'+model).subscribe(response=>this.webApiData=response);
  
    return this.webApiData;
  }

  /*
  GetProducts(model): Product[] { 
    var productArray:Product[]=[];
    for (let i = 0; i < Products.length; i++) {
      if(model==Products[i].Model){
      productArray.push(Products[i]);
      }
      
    }
    return productArray;
  }
  */

}
