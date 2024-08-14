import { Component } from '@angular/core';
import { Rental } from '../../models/rental';
import { RentalService } from '../../services/rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent {
rentals:Rental[]=[];
dataLoaded:boolean=false;
message:string="";
constructor(private colourService:RentalService){}

ngOnInit(): void {
  this.getColours();
}

getColours()
{
  this.colourService.getRentals().subscribe(response=>
  {
    this.rentals = response.data;
    this.dataLoaded = response.success;
    this.message = response.message;
  }
  )

}


}
