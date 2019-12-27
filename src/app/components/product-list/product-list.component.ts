import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from './../../modules/product.class';
import { ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public name: string;
  public price: number;
  public queryParamSubcription: Subscription;

  constructor(
    public productService: ProductService,
    public routerService: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.queryParamSubcription = this.activatedRoute.queryParams.subscribe(data =>{
       let name = data.name;
       let price = data.price;
       this.products = this.productService.getAllProducts(name,price);
     })
   }
   ngOnDestroy(){
     if(this.queryParamSubcription){
       this.queryParamSubcription.unsubscribe();
     }
   }
   onSearch(){
    this.routerService.navigate(['/products'],
    { queryParams: {name: this.name? this.name: '',
                     price: this.price? this.price: ''}})
  }

}
