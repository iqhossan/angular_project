import { Component, OnInit } from '@angular/core';
import { Depot } from '../depot';
import { DepotService } from '../depot.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-depot-update',
  templateUrl: './depot-update.component.html',
  styleUrls: ['./depot-update.component.css']
})

export class DepotUpdateComponent implements OnInit {

  id:number;
  depot:Depot=new Depot();
  
  constructor(private depotService:DepotService, 
    private route:ActivatedRoute,
    private router:Router){
    this.id=0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.depotService.getDepotById(this.id).subscribe(
      data => {
        this.depot = data;
      },
    error => console.log(error));
  }

  goToList(){
    this.router.navigate(['/depots']);
  }

  onSubmit(){
    this.depotService.updateDepot(this.id,this.depot)
    .subscribe(
      data => { 
      this.goToList();
    }, 
    error => console.log(error));
  }

}
