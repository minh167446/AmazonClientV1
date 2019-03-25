import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

import { AddressComponent } from './address/address.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostproductComponent } from './postproduct/postproduct.component';
import { MyproductsComponent } from './myproducts/myproducts.component'
import { CategoryComponent } from './category/category.component'
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';

import { AuthguardService } from './authguard.service';
const routes: Routes = [ 
  {
  path: '',
  component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // children: [
    //   {
    //     path: "settings",
    //     component: SettingsComponent
    //   },
    //   {
    //     path: "address",
    //     component: AddressComponent
    //   }
    // ]
  },
  {
    path: "profile/settings",
    component: SettingsComponent
  },
  {
    path: "profile/address",
    component: AddressComponent
  },
  {
    path: "profile/postproduct",
    component: PostproductComponent
  },
  {
    path: "profile/myproducts",
    component: MyproductsComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "categories/:id",
    component: CategoryComponent
  },
  {
    path: "product/:id",
    component: ProductComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "cart",
    component: CartComponent
  }, 
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
