import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.baseUrl}/posts`);
  }

  getPostById(id:number): Observable<Data>{
    return this.http.get<Data>(`${this.baseUrl}/posts/${id}`);
  }
}
