import {Component, OnInit } from '@angular/core';
import {Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-twitterblock',
  templateUrl: './twitterblock.component.html',
  styleUrls: ['./twitterblock.component.css']
})
export class TwitterblockComponent implements OnInit {
  team: string = this.route.snapshot.paramMap.get("team");

  constructor(@Inject(DOCUMENT) private document: Document, private route: ActivatedRoute) {}

  ngOnInit() {

  }
  gettwitter(clubname){
    var teams = [
    {"team":"Collingwood",  "twitter":"CollingwoodFC"},
    {"team":"Adelaide","twitter":"Adelaide_FC"},
    {"team":"Western Bulldogs","twitter": "westernbulldogs"},
    {"team":"Greater Western Sydney","twitter": "GWSGIANTS"},
    {"team":"Fremantle","twitter": "freodockers"},
    {"team":"Melbourne","twitter": "melbournefc"},
    {"team":"Hawthorn","twitter": "HawthornFC"},
    {"team":"Gold Coast","twitter": "GoldCoastSUNS"},
    {"team":"Richmond","twitter": "Richmond_FC"},
    {"team":"Geelong","twitter": "GeelongCats"},
    {"team":"West Coast","twitter": "WestCoastEagles"},
    {"team":"St Kilda","twitter": "stkildafc"},
    {"team":"Essendon","twitter": "essendonfc"},
    {"team":"Carlton","twitter": "CarltonFC"},
    {"team":"Adelaide","twitter": "Adelaide_FC"},
    {"team":"North Melbourne","twitter": "NMFCOfficial"},
    {"team":"Port Adelaide","twitter": "PAFC"},
    {"team":"Sydney","twitter": "sydneyswans"},
    {"team": "Brisbane Lions","twitter":"brisbanelions"}];

    //console.log(teams.map(res => console.log(res.twitter)));
    for(var i =0; i < teams.length; i++){
      if(teams[i].team == clubname) return teams[i].twitter;
    }
  }
  ngAfterViewInit() {
    var script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementById("twitter").appendChild(script);
  }

}
