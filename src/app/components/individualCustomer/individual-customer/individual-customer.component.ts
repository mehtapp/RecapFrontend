import { Component, OnInit } from '@angular/core';
import { IndividualCustomer } from '../../../models/individualCustomer';
import { IndividualCustomerServic } from '../../../services/individualCustomer/individual-customer.service';

@Component({
  selector: 'app-individual-customer',
  templateUrl: './individual-customer.component.html',
  styleUrl: './individual-customer.component.css'
})
export class IndividualCustomerComponent implements OnInit {
individualCustomers:IndividualCustomer[]= [];
dataLoaded:boolean=false;
message:string="";

constructor(private individualCustomerService:IndividualCustomerServic) {}
getIndividualCustomers()
{
  this.individualCustomerService.getIndividualCustomer().subscribe(response=>
  {
    this.individualCustomers = response.data;
    this.dataLoaded = response.success;
    this.message = response.message;
  }
  )
}

ngOnInit(): void {
  this.getIndividualCustomers();
}
}
