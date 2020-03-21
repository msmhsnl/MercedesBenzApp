import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  webApiData:Product[];
  
  GetProducts(model){ 
    
  return this.http.get('http://localhost:64895/api/Model/GetProductsByModel/'+model);

  }
 
}
