import { Component } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  cars:Car[]= [];
  dataLoaded:boolean=false;
  message:string="";

  constructor(private carService:CarService) {}
  getCars()
  {
    this.carService.getCars().subscribe(response=>
    {
      this.cars = response.data;
      this.dataLoaded = response.success;
      this.message = response.message;
    }
    )
  }

  ngOnInit(): void {
    this.getCars();
  }
  }
