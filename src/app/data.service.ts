import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>('/api/Authorizations/Login/12345/242346332');
  }
}
