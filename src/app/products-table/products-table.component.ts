import { Product } from './../models/product.model';
import { ProductService } from './../product.service';
import { Component,ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  @ViewChild(MatTable, {static: false}) datatable:MatTable<any>;
 

  products: Product[];

  prodColumns: string[] = ['id', 'name', 'department', 'price', 'description'];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    //Atualizar grid
    this.productService
        .onNewProduct
        .subscribe((p) => {
      this.datatable.renderRows();
    });

  }

}
