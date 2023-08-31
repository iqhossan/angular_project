import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interestrate } from './interestrate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class InterestrateService {

  private baseURL = "http://localhost:8081/api/v1/interestrate";

  constructor(private httpClient:HttpClient) { }

  geRateList():Observable<Interestrate[]>{
    return this.httpClient.get<Interestrate[]>(`${this.baseURL}`);
  }

  createRate(interestrate:Interestrate):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, interestrate);
  }

  getRateById(id:number):Observable<Interestrate>{
    return this.httpClient.get<Interestrate>(`${this.baseURL}/${id}`);
  }

  updateRate(id:number, interestrate:Interestrate):Observable<Object>{
    return this.httpClient.put<Object>(`${this.baseURL}/${id}`,interestrate);
  }

  deleteRate(id:number):Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${id}`);
  }

}
