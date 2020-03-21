import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];

  @Input() contentData;

  constructor(private productService:ProductService) {}

  GetProducts(model):void{
    this.products=this.productService.GetProducts(model);
  }

  ngOnInit(): void {
   
  }
  ngOnChanges(): void {
    
    this.GetProducts(this.contentData);
  }

}
