import { Component } from '@angular/core';
import { ColourComponent } from './components/colour/colour.component';
import { BrandService } from './services/brand/brand.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
})
export class AppComponent {
  title = 'recapFrontend';
  baseUrl = "";

  domain:string="";

  ngOnInit(): void {
    this.domain = window.location.origin;
  }
}
