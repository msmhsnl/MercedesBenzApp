import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  
  modelMenuItems=document.getElementsByClassName("model-menu-item");
  
  
  
  
  sharedData="All";

  public responseData;

  onClick(event){
    var target=event.currentTarget;
    this.sharedData=target.getAttribute("id").toString();
    for (let i = 0; i < this.modelMenuItems.length; i++) {
      this.modelMenuItems[i].setAttribute("class","model-menu-item")
    }
    target.setAttribute("class","model-menu-item active"); 
    this.responseData=this.productService.GetProducts(this.sharedData).subscribe(response=>this.responseData=response);  
    }
   

  constructor(private productService:ProductService) {
    
  }

  ngOnInit(): void {
    this.responseData=this.productService.GetProducts(this.sharedData);
  }
  ngOnChanges(): void{
    
    
  }


}
