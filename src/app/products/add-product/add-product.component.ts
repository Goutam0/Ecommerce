import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  addNewProduct(form: { value: any; }){
    console.log(form.value)

    let newProduct={
      id:112,
      categoryId:form.value.product_category,
      description:form.value.product_description
    };
    console.log(newProduct);
    this.productService.createProduct(newProduct).subscribe(data=>{
      console.log(data);
    })

  }

}
