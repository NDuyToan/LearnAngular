import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Product} from './../../modules/product.class';
import { ProductService} from './../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  public product : Product=null;
  public subscription: Subscription;

  constructor(
    public activatedRoute: ActivatedRoute,
    public routerService: Router,
    public productService: ProductService
  ) { }

  ngOnInit() {
   //this.handleBySnapshot(); 
   this.subscription = this.activatedRoute.params.subscribe(data => {
    // console.log(data);
     let id = data.id;
     this.product = this.productService.getProductByID(id);
   })
   
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  handleBySnapshot(){
    let id = this.activatedRoute.snapshot.params['id'];
    this.product = this.productService.getProductByID(id);
  }
  onBackToList(){
    //this.routerService.navigate(['products/list']);
    this.routerService.navigate(['list'],{
      relativeTo: this.activatedRoute.parent
    })
  }
  onEdit(){
    this.routerService.navigate(['edit',this.product.id],{
      relativeTo: this.activatedRoute.parent
    })
  }
}
