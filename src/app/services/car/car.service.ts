import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carResponseModel } from '../../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl:string = "https://localhost:7232/api/Cars/Getcardetails";
  constructor(private httpClient:HttpClient) { }


getCars():Observable<carResponseModel>{
return this.httpClient.get<carResponseModel>(this.apiUrl);
}


}
