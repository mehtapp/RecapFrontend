import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CorporateCustomerResponseModel } from '../../models/corporateCustomerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CorporateCustomerService {
  apiUrl:string="https://localhost:7232/api/CorporateCustomers/Getallcorporatecustomer";
  constructor(private httpClient:HttpClient) { }

  getCorporateCustomers()
  {
    return this.httpClient.get<CorporateCustomerResponseModel>(this.apiUrl);
  }
}
