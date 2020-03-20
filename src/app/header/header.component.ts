import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 isActive:string="";
 arrowStatus:string="down";
 displayStatus:string="";
 submenuItem=document.getElementsByClassName("submenu-item");
 
 navClick():void{
   if(this.isActive==""){
    this.isActive="active";
    this.arrowStatus="up";
    this.displayStatus="display-none"
   }else{
    this.isActive="";
    this.arrowStatus="down";
    this.displayStatus=""
    this.subClickFeatured();
   }
  }
 
  subClickFeatured():void{
    this.submenuItem[0].setAttribute("class","submenu-item d-flex active");
    this.submenuItem[1].setAttribute("class","submenu-item d-flex");
  }

  subClickModels():void{
    this.submenuItem[0].setAttribute("class","submenu-item d-flex");
    this.submenuItem[1].setAttribute("class","submenu-item d-flex active");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
