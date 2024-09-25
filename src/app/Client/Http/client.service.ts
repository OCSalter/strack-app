import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Either, GenerateEither } from '../../Structures/Monad';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private url = 'http://localhost:4010'

  constructor(private http: HttpClient,) { }

  getMatches(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/matches`)
  }

  getQuery<T>(q: String): Observable<Either<T[]>> {
    return this.http.get<T[]>(`${this.url}/${q}`).pipe(
      map((_: T[]) => GenerateEither(_)),
    );
  }
}
  