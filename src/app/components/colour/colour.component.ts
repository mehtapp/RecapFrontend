import { Component, OnInit } from '@angular/core';
import { colour } from '../../models/colour';
import { ColourService } from '../../services/colour/colour.service';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrl: './colour.component.css'
})
export class ColourComponent implements OnInit {
colours:colour[]=[];
dataLoaded:boolean=false;
message:string="";

constructor(private colourService:ColourService){}

ngOnInit(): void {
  this.getColours();
}

getColours()
{
  this.colourService.getColours().subscribe(response=>
  {
    this.colours = response.data;
    this.dataLoaded = response.success;
    this.message = response.message;
  }
  )

}


}
