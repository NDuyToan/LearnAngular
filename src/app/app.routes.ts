import { RouterModule, Routes } from '@angular/router';


import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent} from './components/product-detail/product-detail.component';
import { from } from 'rxjs';
export const appRoutes: Routes = [
    {
      path:'',
      redirectTo:'/home',
      pathMatch:"full"
    },
    {
      path:'home',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
      path: 'products/:id',
      component: ProductDetailComponent
    },
    {
      path:'**',
      component: NotFoundComponent
    }
   
  ]