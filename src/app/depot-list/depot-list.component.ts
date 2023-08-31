import { Component, OnInit } from '@angular/core';
import { Depot } from '../depot';
import { DepotService } from '../depot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot-list',
  templateUrl: './depot-list.component.html',
  styleUrls: ['./depot-list.component.css']
})


export class DepotListComponent implements OnInit {

  depots:Depot[];

  constructor(private depotService:DepotService,
    private router:Router){
    this.depots = [];
  }

  ngOnInit(): void {
    this.getDepot();
  }

  private getDepot(){
    this.depotService.getDepotList().subscribe(
      data => {
        this.depots = data;
      });
  }

  updateDepot(id:number){
    this.router.navigate(['update-depot',id])
  } 
  
  back(): void {
    this.router.navigate(['/depots']);
  }

  deleteDepot(id:number){
    this.depotService.deleteDepot(id).subscribe(
     data=>{
       console.log(data);
       this.getDepot();
     },
     error => console.log(error));
 }


}
