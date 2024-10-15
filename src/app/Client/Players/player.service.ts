import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { UUID } from 'crypto';
import { Observable } from 'rxjs';
import { Either } from '../../Structures/Monad';
import { PlayerTag } from '../../Domain/strack';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private prefix: string = 'http://localhost:4010/players'

  constructor( private httpService: HttpService, ) { }


  getPlayerTagsFromMatch(id: UUID): Observable<Either<PlayerTag[]>> {
    return this.httpService.getEntryList<PlayerTag>(this.prefix + '/fromMatch/' + id.toString());
  }
  
}
