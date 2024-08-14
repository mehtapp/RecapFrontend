import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IndividualCustomerResponseModel } from '../../models/individualCustomerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class IndividualCustomerServic {
apiUrl:string = "https://localhost:7232/api/IndividualCustomers/Getallindividualcustomer";


  constructor(private httpClient:HttpClient) { }

getIndividualCustomer():Observable<IndividualCustomerResponseModel>
{
  return this.httpClient.get<IndividualCustomerResponseModel>(this.apiUrl);
}




}
