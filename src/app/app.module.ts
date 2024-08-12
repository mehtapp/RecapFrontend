import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColourComponent } from './components/colour/colour.component';
import { BrandComponent } from './components/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    ColourComponent,
    BrandComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
