import { Component, OnInit } from '@angular/core';
import { CorporateCustomerService } from '../../../services/corporateCustomer/corporate-customer.service';
import { CorporateCustomer } from '../../../models/corporateCustomer';

@Component({
  selector: 'app-corporate-customer',
  templateUrl: './corporate-customer.component.html',
  styleUrl: './corporate-customer.component.css'
})
export class CorporateCustomerComponent implements OnInit {
  corporateCustomers:CorporateCustomer[]=[];
  dataLoaded=false;
  message:string="";
constructor(private corporateCustomerService:CorporateCustomerService) {}


  ngOnInit(): void {
    this.getCorporateCustomers();
  }


  getCorporateCustomers()
    {
        this.corporateCustomerService.getCorporateCustomers().subscribe(response=>
        {
          this.corporateCustomers = response.data;
          this.dataLoaded = response.success;
          this.message = response.message;
        }
        )
    }
}
