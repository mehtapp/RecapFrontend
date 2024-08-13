import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColourComponent } from './components/colour/colour.component';
import { BrandComponent } from './components/brand/brand.component';
import { NavComponent } from './components/nav/nav.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrandService } from './services/brand/brand.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ColourComponent,
    BrandComponent,
    NavComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  // providers: [BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
