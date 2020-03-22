import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() sharedResponseData;

  products:Product[];

  markerData;
  
  styleManager(){

    this.markerData=[];
    
    let k=this.products[0].Model;

    for (let i = 1; i < this.products.length; i++) {
      if(k==this.products[i].Model){
        var obj={marker:"",display:"v-hidden",top:"img-down"};
        this.products[i].Model="";
      }else{
        k=this.products[i].Model;
        var obj={marker:"marker",display:"",top:""};
      }
      this.markerData[i]=obj;
    };
    this.markerData[0]={marker:"marker",display:"",top:""};
  }
  
  constructor(private productService:ProductService) {
    this.products=this.sharedResponseData;
    
  }

  ngOnInit(): void {
    //this.products=this.sharedResponseData;
  }

  ngOnChanges(): void {
   this.products=this.sharedResponseData;
   this.styleManager();
  }

}
