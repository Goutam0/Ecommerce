import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Category } from 'src/app/site-layout/category';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  searchCategory:any;
  productList:any;
  
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data=>{
      this.searchCategory=data.id;

      this.productService.searchCategoryProduct(this.searchCategory).subscribe((categoryData: any)=>{
        this.productList=categoryData;
      })

    })
  }

}
