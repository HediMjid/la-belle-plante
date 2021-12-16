import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private httpClient: HttpClient) { }

  getData():Observable<any[]> {
    return this.httpClient.get<any[]>('http://192.168.1.16:3000/list_products');
  }
}
