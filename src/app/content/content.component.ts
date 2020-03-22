import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
//import { Product } from '../product';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  
  modelMenuItems=document.getElementsByClassName("model-menu-item");
  
  senderData="All";

  public responseData;
  
  Delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  Request(){
    this.responseData=this.productService.GetProducts(this.senderData).subscribe(response=>this.responseData=response); 

    this.Delay(1);//product.component renderinden önce request verisini alabilmek için.
  }

  OnClick(event){
    
    var target=event.currentTarget;

    this.senderData=target.getAttribute("id").toString();

    for (let i = 0; i < this.modelMenuItems.length; i++) {
      this.modelMenuItems[i].setAttribute("class","model-menu-item")
    }

    target.setAttribute("class","model-menu-item active"); 

    this.Request(); 
 }
   

  constructor(private productService:ProductService) {

    this.Request();
  }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void{
    
    
  }


}
