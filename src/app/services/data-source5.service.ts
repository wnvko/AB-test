import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSource5Service {
  constructor(private http: HttpClient) { }

  public getTable1(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/6aa1aabc200747e8bc38cc1da8a2de43`);
  }
}
