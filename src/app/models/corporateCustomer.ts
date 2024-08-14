import { User } from "./user";

export interface CorporateCustomer extends User{
  corporateCustomerId:number;
  corporateName:string;
}
