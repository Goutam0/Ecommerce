import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-viewall-product',
  templateUrl: './viewall-product.component.html',
  styleUrls: ['./viewall-product.component.css']
})
export class ViewallProductComponent implements OnInit {
 productList: any;
 productId=0;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(data=>{
    //   this.productId=data.id; 
    //   })
    this.productService.viewProduct(this.productId).subscribe(data=>{
    this.productList=data;
    })
  }

}
