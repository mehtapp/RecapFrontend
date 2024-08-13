import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
 apiUrl:string = "https://localhost:7232/api/Brands/Getall";

  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}
