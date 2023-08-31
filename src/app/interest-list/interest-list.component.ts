import { Component, OnInit } from '@angular/core';
import { Interestrate } from '../interestrate';
import { InterestrateService } from '../interestrate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.css']
})

export class InterestListComponent implements OnInit {

  id:number;
  rates:Interestrate[];
  rate:Interestrate = new Interestrate();

  constructor(private rateService:InterestrateService,
    private route:ActivatedRoute,
    private router:Router){
    this.rates = [];
    this.id =0;
  }

  ngOnInit(): void {
    this.getRate();
  }

  onSubmit(){
    this.rateService.createRate(this.rate)
    .subscribe(
      data => { 
      this.goToList();
    }, 
    error => console.log(error));
  }

  goToList(){
    this.getRate();
  }

  private getRate(){
    this.rateService.geRateList().subscribe(
      data => {
        this.rates = data;
      });
  }

  updateRate(id:number){
    this.getRate();
    this.id = id;
    this.rateService.getRateById(this.id).subscribe(
      data => {
        this.rate = data;
        console.log("rate", data)
      },
    error => console.log(error));
  } 
  
  back(): void {
    this.router.navigate(['/rates']);
  }

  deleteRate(id:number){
    this.rateService.deleteRate(id).subscribe(
     data=>{
       console.log(data);
       this.getRate();
     },
     error => console.log(error));
 }


}
