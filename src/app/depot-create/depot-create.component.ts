import { Component, OnInit } from '@angular/core';
import { Depot } from '../depot';
import { DepotService } from '../depot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot-create',
  templateUrl: './depot-create.component.html',
  styleUrls: ['./depot-create.component.css']
})

export class DepotCreateComponent implements OnInit {

  depot:Depot = new Depot();

  constructor(private depotService: DepotService,
    private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    this.depotService.createDepot(this.depot)
    .subscribe(
      data => { 
      this.goToList();
    }, 
    error => console.log(error));
  }

  goToList(){
    this.router.navigate([`/depots`]);
  }

}
