import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
  // providers: [BrandService]
})
export class BrandComponent implements OnInit {
 brands:Brand[] = [];
dataLoaded=false;
message:string="";
 constructor(private brandService:BrandService){}


 ngOnInit(): void {
   this.getBrands();
 }

 getBrands()
 {
  this.brandService.getBrands().subscribe(response=>
  {
    this.brands = response.data;
    this.dataLoaded =response.success;
    this.message = response.message;
  });

 }

}
