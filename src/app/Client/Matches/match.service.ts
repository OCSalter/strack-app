import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { UUID } from 'crypto';
import { MatchPreview, MatchTag } from '../../Domain/strack';
import { Observable } from 'rxjs';
import { Either } from '../../Structures/Monad';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private prefix: string = 'http://localhost:4010/matches'

  constructor( private httpService: HttpService, ) { }
  
  public getMatchesFromGroup(id: UUID): Observable<Either<MatchTag[]>> {
    return this.httpService.getEntryList<MatchTag>( this.prefix + '/fromGroup/' + id.toString());
  }

  public getMatchPreviewFromGroup(id: UUID): Observable<Either<MatchPreview[]>> {
    return this.httpService.getEntryList<MatchPreview>( this.prefix + '/previewFromGroup/' + id.toString());
  }

  public getMatchPreviewFromUser(id: UUID): Observable<Either<MatchPreview[]>> {
    return this.httpService.getEntryList<MatchPreview>( this.prefix + '/fromUser/' + id.toString())
  }
}
