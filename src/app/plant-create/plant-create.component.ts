import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { Router } from '@angular/router';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-create',
  templateUrl: './plant-create.component.html',
  styleUrls: ['./plant-create.component.css']
})

export class PlantCreateComponent implements OnInit {

  plant:Plant = new Plant();

  constructor(private plantService: PlantService,
    private router:Router){     
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    this.plantService.createPlant(this.plant)
    .subscribe(
      data => { 
      this.goToList();
    }, 
    error => console.log(error));
  }

  goToList(){
    this.router.navigate([`/plants`]);
  }

}
