import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApihandlerService } from '../apihandler.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {Team} from '../team';

@Component({
  selector: 'app-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.css']
})
export class TeamSelectorComponent implements OnInit {
  public comm: Team[];
  constructor(private http: HttpClient, private api: ApihandlerService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Flutter.ly");
    this.loadTeams();
  }
  loadTeams(){
    this.api.getTeams().subscribe(res => {this.comm = res;});
  }
}
