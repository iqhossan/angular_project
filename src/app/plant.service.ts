import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from './plant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private baseURL = "http://localhost:8081/api/v1/plant";

  constructor( private httpClient:HttpClient) { }

  getPlantList():Observable<Plant[]>{
    return this.httpClient.get<Plant[]>(`${this.baseURL}`);
  }

  createPlant(plant:Plant):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, plant);
  }

  getPlantById(id:number):Observable<Plant>{
    return this.httpClient.get<Plant>(`${this.baseURL}/${id}`);
  }

  updatePlant(id:number, plant:Plant):Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseURL}/${id}`,plant);
  }

  deletePlant(id:number):Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${id}`);
  }

}
