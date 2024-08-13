import { User} from "./user";

export interface IndividualCustomer extends User{
  individualCustomerId:number;
  firstName:string;
  lastName:string;
}
