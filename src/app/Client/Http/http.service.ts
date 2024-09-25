import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Either, GenerateEither } from '../../Structures/Monad';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient, ) { }

  public getEntryList<T>( url: string ): Observable<Either<T[]>> {
    return this.http.get<T[]>(url).pipe(
      map((_: T[]) => GenerateEither(_)),
    );
  }

  public getEntry<T>( url: string ): Observable<Either<T>> {
    return this.http.get<T>(url).pipe(
      map((_: T) => GenerateEither(_)),
    );
  }
}
