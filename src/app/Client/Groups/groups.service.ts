import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor( private httpService: HttpService, ) { }

}
