import { User } from "./user";

export interface CorporateCustomer extends User{
  corporateId:number;
  companyName:string;
}
