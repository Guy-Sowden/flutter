import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Team} from './team';
import {Game} from './game';
import {Tip} from './tip';
@Injectable({
  providedIn: 'root'
})
export class ApihandlerService {
  public comm: [];
  private currentyear=2019;
  constructor(private http: HttpClient) { }

  getTeams() : Observable<Team[]> {
    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(
      map((data: any) => data.teams.map((item: any) => new Team(
        item.logo,
        item.id,
        item.name,
        item.abbrev
      )))
    );
    }

    getAllGames(round?:number) : Observable<Game[]> {
      var url = 'https://api.squiggle.com.au/?q=games;year='+this.currentyear;
      if (typeof round != "undefined"){
        url += ";round="+round;
      }
      console.log(url)
      return this.http.get(url).pipe(
        map((data: any) => data.games.map((item: any) => new Game(
          item.hteamid,
          item.round,
          item.complete,
          item.winnerteamid,
          item.is_final,
          item.year,
          item.date,
          item.hbehinds,
          item.ateamid,
          item.tz,
          item.winner,
          item.ascore,
          item.is_grand_final,
          item.abehinds,
          item.hgoals,
          item.updated,
          item.venue,
          item.hscore,
          item.ateam,
          item.id,
          item.agoals,
          item.hteam
        )))
      );
  }
  getTips() : Observable<Tip[]> {
    return this.http.get('https://api.squiggle.com.au/?q=tips;source=2;year='+this.currentyear).pipe(
      map((data: any) => data.tips.map((item: any) => new Tip(
        item.round,
        item.tip,
        item.year,
        item.margin,
        item.err,
        item.correct,
        item.hconfidence,
        item.ateam,
        item.source,
        item.hteamid,
        item.confidence,
        item.venue,
        item.hteam,
        item.bits,
        item.ateamid,
        item.tipteamid,
        item.date,
        item.gameid,
        item.updated,
        item.sourceid
      )))
    );
}

}
