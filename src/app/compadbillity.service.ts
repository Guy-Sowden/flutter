import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CompadbillityService {

  constructor() { }

  correctImage(name){
    name = name.replace(' ','');
    switch(name){
      case 'BrisbaneLions':
        name = 'Brisbane';
        break;
      case 'WesternBulldogs':
        name = "Bulldogs";
        break;
      case 'GreaterWestern Sydney':
        return "Giants.png";
        break;
    }
    name = name + ".jpg";
    return name;
  }
getbeteam(teamVAR){
    //matches team name with url paramaters for betting site
  var bettingurlprams =[
     {"t":"Bulldogs","team": "Wst Bulldogs"},
     {"t":"Port Adelaide","team": "Port Adel"},
     {"t":"Greater Western Sydney","team": "GWS"},
     {"t":"Brisbane Lions","team": "Brisbane"}
   ];
   for(var i =0; i < bettingurlprams.length; i++){
     if(bettingurlprams[i].t == teamVAR) return bettingurlprams[i].team;
   }
   return teamVAR;
 }
 getBettingLink(hteam , ateam ){
   //return betting site link
   var base = "https://www.tab.com.au/sports/betting/AFL%20Football/competitions/AFL/matches/";
   return base + this.getbeteam(hteam) + " v "+ this.getbeteam(ateam) + "?betOption=undefined";
 }
}
