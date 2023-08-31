import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Handlingcost } from './handlingcost';

@Injectable({
  providedIn: 'root'
})

export class HandlingcostService {

  private baseURL = "http://localhost:8081/api/v1/hcost";

  constructor(private httpClient:HttpClient) { }

  getHCostList():Observable<Handlingcost[]>{
    return this.httpClient.get<Handlingcost[]>(`${this.baseURL}`);
  }

  createHCost(hcost:Handlingcost):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, hcost);
  }

  getHCostById(id:number):Observable<Handlingcost>{
    return this.httpClient.get<Handlingcost>(`${this.baseURL}/${id}`);
  }

  updateHCost(id:number, hcost:Handlingcost):Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseURL}/${id}`,hcost);
  }

  deleteHCost(id:number):Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${id}`);
  }
}
