import { Component, OnInit } from '@angular/core';
import {Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CompadbillityService} from '../compadbillity.service';
import { ApihandlerService } from '../apihandler.service';
import {Game} from '../game';


@Component({
  selector: 'app-currentgames',
  templateUrl: './currentgames.component.html',
  styleUrls: ['./currentgames.component.css']
})
export class CurrentgamesComponent implements OnInit {
  public gamesThisRound: Game[];
  public round: number;
  constructor(private http: HttpClient, private com: CompadbillityService,
  private api : ApihandlerService) {}

  ngOnInit() {
    this.getRound();
    this.getGamesThisRound();
  }
  getGamesThisRound(){
    this.api.getAllGames(this.round).subscribe( res => {this.gamesThisRound = res;})
  }
  getRound(){
    var milliseconds = (new Date).getTime();
    var seasonOpening = 1552870800000; //monday beffore season opening 2019
    this.round = Math.ceil((milliseconds - seasonOpening)/ (7 * 24 * 60 * 60000));
  }
  getImage(teamName){
    return this.com.correctImage(teamName);
    //return teamName;
  }


}
