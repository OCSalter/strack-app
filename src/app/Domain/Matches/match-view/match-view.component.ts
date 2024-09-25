import { Component, OnInit } from '@angular/core';
import { MatchPreview, MatchTag } from '../../strack';
import { MatchService } from '../../../Client/Matches/match.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrl: './match-view.component.css'
})
export class MatchViewComponent implements OnInit{

  public matchTags: MatchTag [] = [];

  public matchPreviews: MatchPreview [] = [];

  constructor( private matchService: MatchService, ) { }

  ngOnInit(): void {
    this.matchService.getMatchesFromGroup('7e993503-cf82-4ae2-b9ca-1cba07cada4a').subscribe(_ => _.map(mt => this.matchTags = mt));

    this.matchService.getMatchPreviewFromGroup('7e993503-cf82-4ae2-b9ca-1cba07cada4a').subscribe(_ => _.map(mp =>{
      console.log(mp);
      this.matchPreviews = mp;
    } ));
  }

}
