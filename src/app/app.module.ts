import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/**router**/
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { AuthguardService } from './authguard.service';

import { MessageComponent } from './message/message.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostproductComponent } from './postproduct/postproduct.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    SettingsComponent,
    AddressComponent,
    CategoriesComponent,
    PostproductComponent,
    MyproductsComponent,
    CategoryComponent,
    ProductComponent,
    CartComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [RestApiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
