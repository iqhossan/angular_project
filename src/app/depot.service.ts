import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depot } from './depot';
 
@Injectable({
  providedIn: 'root'
})
export class DepotService {

  private baseURL = "http://localhost:8081/api/v1/depot";

  constructor(private httpClient:HttpClient) { }

  getDepotList():Observable<Depot[]>{
    return this.httpClient.get<Depot[]>(`${this.baseURL}`);
  }

  createDepot(depot:Depot):Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseURL}`,depot);
  }

  getDepotById(id:number):Observable<Depot>{
    return this.httpClient.get<Depot>(`${this.baseURL}/${id}`);
  }

  updateDepot(id:number,depot:Depot):Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseURL}/${id}`, depot);
  }

  deleteDepot(id:number):Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${id}`);
  }

}
