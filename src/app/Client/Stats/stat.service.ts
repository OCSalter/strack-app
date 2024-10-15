import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { Either } from '../../Structures/Monad';
import { Observable } from 'rxjs';
import { UUID } from 'crypto';
import { Stat } from '../../Domain/strack';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  private prefix: string = 'http://localhost:4010/stats'

  constructor(private httpService: HttpService) { }

  public getStatsFromReference(id: UUID):Observable<Either<Stat[]>> {
    return this.httpService.getEntryList<Stat>(this.prefix + '/fromReference/' + id.toString());
  }

}
