import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  
  modelMenuItems=document.getElementsByClassName("model-menu-item");
  controlResult:string;
  senderData="All";

  @Input() sharedSelectionData;

  public responseData;
    
  DataControl(){
      if(this.sharedSelectionData=="Featured"){
        this.controlResult="display-none";
        this.Delay(10);
        this.Request(this.sharedSelectionData);
      }else{
        this.controlResult="";
        this.Delay(10);
        this.Request(this.senderData);
        this.Delay(10);
      }
  }

  Delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  Request(data){
    this.responseData=this.productService.GetProducts(data).subscribe(response=>this.responseData=response); 

    this.Delay(10);//product.component renderinden önce request verisini alabilmek için.
  }

  OnClick(event){
    
    var target=event.currentTarget;

    this.senderData=target.getAttribute("id").toString();

    for (let i = 0; i < this.modelMenuItems.length; i++) {
      this.modelMenuItems[i].setAttribute("class","model-menu-item")
    }

    target.setAttribute("class","model-menu-item active"); 

    
    this.DataControl();
 }
   

  constructor(private productService:ProductService) {
    
    this.DataControl();
    
  }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void{
    
    this.DataControl();
  }


}
