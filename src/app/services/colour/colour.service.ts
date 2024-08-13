import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColourResponseModel } from '../../models/colourResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColourService {
 apiUrl:string = "https://localhost:7232/api/Colours/Getall";
  constructor(private httpClient:HttpClient) { }


getColours():Observable<ColourResponseModel>{
return this.httpClient.get<ColourResponseModel>(this.apiUrl);
}


}
