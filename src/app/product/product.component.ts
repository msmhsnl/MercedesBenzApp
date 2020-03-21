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

  
  
  
  constructor(private productService:ProductService) {
    this.products=this.sharedResponseData;
  }

  

  ngOnInit(): void {
    this.products=this.sharedResponseData;
  }
  ngOnChanges(): void {
    
   this.products=this.sharedResponseData;
  }

}
