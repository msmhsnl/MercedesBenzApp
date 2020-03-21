import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  
  modelMenuItems=document.getElementsByClassName("model-menu-item");

  
//sharedData WebApi Model kısmında kullanılacak
public sharedData;

  onClick(event){
    var target=event.currentTarget;
    this.sharedData=target.getAttribute("id").toString();
    for (let i = 0; i < this.modelMenuItems.length; i++) {
      this.modelMenuItems[i].setAttribute("class","model-menu-item")
    }
    target.setAttribute("class","model-menu-item active");   
    }
   

  constructor() {
  this.sharedData="All";
  alert("sharedData: "+this.sharedData);
  }

  ngOnInit(): void {
    
  }


}
