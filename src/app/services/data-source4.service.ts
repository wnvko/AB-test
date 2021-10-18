import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSource4Service {
  constructor(private http: HttpClient) { }

  public getTable1(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos`);
  }
}
