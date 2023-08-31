import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plant-update',
  templateUrl: './plant-update.component.html',
  styleUrls: ['./plant-update.component.css']
})

export class PlantUpdateComponent implements OnInit {

  id:number;
  plant:Plant=new Plant();
  
  constructor(private plantService:PlantService, 
    private route:ActivatedRoute,
    private router:Router){  
      this.id = 0;
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.plantService.getPlantById(this.id).subscribe(
      data => {
        this.plant = data;
      },
    error => console.log(error));
  }

  goToList(){
    this.router.navigate(['/plants']);
  }

  onSubmit(){
    this.plantService.updatePlant(this.id,this.plant)
    .subscribe(
      data => { 
      this.goToList();
    }, 
    error => console.log(error));
  }

}
