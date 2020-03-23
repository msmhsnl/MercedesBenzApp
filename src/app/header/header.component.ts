import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 isActive:string="";
 arrowStatus:string="down";
 displayStatus:string="visibility-show";
 displayStatusDropdownM:string="display-none";
 displayStatusDropdownF:string="";
 submenuItem=document.getElementsByClassName("submenu-item");

 public selectionData;

 navClick():void{
   if(this.isActive==""){
    this.isActive="active";
    this.arrowStatus="up";
    this.displayStatus="visibility-none";
    this.displayStatusDropdownM="";
    this.displayStatusDropdownF="display-none";
    this.selectionData="";
    
   }else{
    this.isActive="";
    this.arrowStatus="down";
    this.displayStatus="visibility-show";
    this.subClickFeatured();
   }
  }
 
  subClickFeatured():void{
    this.submenuItem[0].setAttribute("class","submenu-item d-flex active");
    this.submenuItem[1].setAttribute("class","submenu-item d-flex");
    this.displayStatusDropdownM="display-none";
    this.displayStatusDropdownF="";
    this.selectionData="Featured";
    
  }

  subClickModels():void{
    this.submenuItem[0].setAttribute("class","submenu-item d-flex");
    this.submenuItem[1].setAttribute("class","submenu-item d-flex active");
    this.displayStatusDropdownM="";
    this.displayStatusDropdownF="display-none";
    this.selectionData="";//buglanabilir TODO
    
  }

  constructor() { 
    this.selectionData="Featured";
  }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    
  }

}
