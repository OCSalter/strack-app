import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private url = 'http://localhost:4010'

  constructor(private http: HttpClient,) { }

  getMatches(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/matches`)
  }

  getQuery(q: String): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/${q}`)
  }
}
  