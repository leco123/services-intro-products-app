import { DepartmentService } from './../department.service';
import { ProductService } from './../product.service';
import { Department } from './../models/department.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  name: string;
  department: Department;
  price: number;
  description: string;
  departments: Department[];

  constructor(
    private productService: ProductService,
    private departamentService: DepartmentService
    ) { }

  ngOnInit() {
    this.departments = this.departamentService.getDepartments();
  }

  save(){
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department
    });
    this.clear();
  }

  clear(){
      this.name = "";
      this.price = 0;
      this.description = "";
      this.department = null;
  }

}
