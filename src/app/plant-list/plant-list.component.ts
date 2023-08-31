import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})

export class PlantListComponent implements OnInit {

  plants: Plant[];

  constructor(private plantServicee: PlantService,
    private router:Router) {
    this.plants = [];
  }

  ngOnInit(): void {
   this.getPlant();
  }

  private getPlant(){
    this.plantServicee.getPlantList().subscribe(
      data => {
        this.plants = data;
      });
  }

  updatePlant(id:number){
    this.router.navigate(['update-plant',id])
  } 
  
  back(): void {
    this.router.navigate(['/plants']);
  }

  deletePlant(id:number){
    this.plantServicee.deletePlant(id).subscribe(
     data=>{
       console.log(data);
       this.getPlant();
     },
     error => console.log(error));
 }


}
