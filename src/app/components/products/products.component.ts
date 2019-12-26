import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { Product } from './../../modules/product.class';
import { ProductService} from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];
  public name: string;
  public price: number;
  constructor(
    public productService: ProductService,
    public routerService: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.activatedRoute.queryParams.subscribe(data =>{
      let name = data.name;
      let price = data.price;
      this.products = this.productService.getAllProducts(name,price);
    })
  }
  onSearch(){
    this.routerService.navigate(['/products'],
    { queryParams: {name: this.name? this.name: '',
                     price: this.price? this.price: ''}})
  }

}
