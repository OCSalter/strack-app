import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { UUID } from 'crypto';
import { User } from '../../Domain/strack';
import { Observable } from 'rxjs';
import { Either } from '../../Structures/Monad';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private prefix: string = 'http://localhost:4010/users'

  constructor( private httpService: HttpService, ) { }

  public getUsersFromMatch(id: UUID): Observable<Either<User[]>> {
    return this.httpService.getEntryList<User>(this.prefix + '/fromMatch/' + id.toString())
  }
}
