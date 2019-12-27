import { RouterModule, Routes } from '@angular/router';


import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent} from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { LoginComponent } from './components/login/login.component';

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
      path: 'login',
      component: LoginComponent
    },
    {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path:'',
            redirectTo: '/products/list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: ProductListComponent
          },
          {
            path: ':id',
            component: ProductDetailComponent
          },
          {
            path: 'edit/:id',
            component: ProductEditComponent
          }
        ]
    },
    // {
    //   path: 'products/:id',
    //   component: ProductDetailComponent
    // },
    {
      path:'**',
      component: NotFoundComponent
    }
   
  ]