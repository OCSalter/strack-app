import { Component, OnInit } from '@angular/core';
import { MatchPreview, PlayerTag, Stat } from '../../strack';
import { UUID } from 'crypto';
import { MatchService } from '../../../Client/Matches/match.service';
import { PlayerService } from '../../../Client/Players/player.service';
import { StatService } from '../../../Client/Stats/stat.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrl: './match-view.component.css'
})

export class MatchViewComponent implements OnInit{

  private UserId: UUID = 'cb6e8fa5-050e-4f07-a90a-8f60237c425e';

  public matchPreviews: MatchPreview [] = [];

  private playersByMatch: Map<UUID, PlayerTag[]>;

  private userTeamStat: Map<UUID, Stat[]>;


  /*
  export interface UserMatchView{
    matchId: UUID;
    modeName: String;
    teamList: Team[];
    userTeamStat: Stat[]
}
  */

  constructor(private matchService: MatchService, private playerService: PlayerService, private statService: StatService) {
    this.playersByMatch = new Map<UUID, PlayerTag[]>();
    this.userTeamStat = new Map<UUID, Stat[]>();
  }

  ngOnInit(): void {
   this.getContent();
  }

  private getContent(): void {
    this.matchService.getMatchPreviewFromUser(this.UserId).subscribe(_ => _.map(mp =>this.handleMatchPreviews(mp)));
  }

  private handleMatchPreviews(mp: MatchPreview[]): void {
    this.matchPreviews = mp;
    this.matchPreviews.forEach(_ => this.gatherPlayerInfo(_));
  }

  private gatherPlayerInfo(mp: MatchPreview){
    this.playerService.getPlayerTagsFromMatch(mp.id)
    .subscribe(e => e.map(players => this.addPlayers(players)));
  }

  private addPlayers(players: PlayerTag[]): void {
    players.forEach(p => {
      this.playersByMatch.set(p.matchId, (this.playersByMatch.get(p.matchId) || []).concat([p]));
      if(p.userId == this.UserId) { this.gatherUserTeamInfo(p); }
    });
  }

  private gatherUserTeamInfo(p: PlayerTag) {
    this.statService.getStatsFromReference(p.teamId).subscribe(_ => _.map(stat => this.userTeamStat.set(p.matchId, stat)))
  }

}
