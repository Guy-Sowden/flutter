import {Component, OnInit } from '@angular/core';
import {Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { ApihandlerService } from '../apihandler.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {Game} from '../game';
import {Tip} from '../tip';
import {CompadbillityService} from '../compadbillity.service';

@Component({
  selector: 'app-teampage',
  templateUrl: './teampage.component.html',
  styleUrls: ['./teampage.component.css']
})
export class TeampageComponent implements OnInit {

  public futureGames: Tip[];
	public loopcounter: boolean = true;
  public pastgames: Game[];
  team: string = this.route.snapshot.paramMap.get("team");
  constructor(private titleService: Title, private route: ActivatedRoute, private http: HttpClient, @Inject(DOCUMENT) private document: Document,
  private api : ApihandlerService, private comm: CompadbillityService) { }

  ngOnInit() {
    this.loadGames();
    this.titleService.setTitle(this.team+" | Flutter.ly");
  }
  loadGames(){
    this.api.getTips().subscribe(temp => { this.futureGames = temp;});
  }
  getPastGame(){
    //hides show past games button
    document.getElementById('prev').style.display = "None";
    document.getElementById('notprev').style.display = "block";
    //load past games array
    this.api.getAllGames().subscribe(res => { this.pastgames = res });
  }
  DateGreater(dateinput:string, tz){
    //tests for whether match has already acured
    var gametime  = new Date(dateinput);
    var now = new Date();
    console.log(gametime.getTime() - now.getTime());

    if(( gametime.getTime() - now.getTime()) < 604800 * 1000 && ( gametime.getTime() - now.getTime()) > 0){
      // checks to see if games are in the same week and betting markets are Component
      return 1;
    }
    if (now.getTime() < gametime.getTime()){
      // games still in future
      return 2;
    }
    return 3;
  }
}
