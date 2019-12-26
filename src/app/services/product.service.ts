import { Injectable } from '@angular/core';
import { Product} from './../modules/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [
    {
      id:1,
      name: 'Iphone 7',
      price: 7000,
      status: true
    },
    {
      id:2,
      name: 'Iphone 8',
      price: 8000,
      status: true
    },
    {
      id:3,
      name: 'SamSung A8',
      price: 8750,
      status: false
    },
    {
      id:4,
      name: 'nokia 8',
      price: 6000,
      status: true
    },
  ];

  constructor() { }
  getAllProducts( name ?:string, price?: number){
    let result: Product[] = [];
    return this.products;
  }

  getProductByID(id: number){
    let result = null;
    for( let i =0; i< this.products.length;i++){
      if( this.products[i].id == id){
        result = this.products[i];

        break;
      }
    }
    return result;
  }

}
