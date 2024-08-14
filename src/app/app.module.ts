import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColourComponent } from './components/colour/colour.component';
import { BrandComponent } from './components/brand/brand.component';
import { NavComponent } from './components/nav/nav.component';

import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrandService } from './services/brand/brand.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IndividualCustomerComponent } from './components/individualCustomer/individual-customer/individual-customer.component';
import { CorporateCustomerComponent } from './components/corporateCustomer/corporate-customer/corporate-customer.component';
import { RentalForIndividualCustomerComponent } from './components/rentalForIndividualCustomer/rental-for-individual-customer/rental-for-individual-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    ColourComponent,
    BrandComponent,
    NavComponent,
    CarComponent,
    RentalComponent,
    IndividualCustomerComponent,
    CorporateCustomerComponent,
    RentalForIndividualCustomerComponent
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
