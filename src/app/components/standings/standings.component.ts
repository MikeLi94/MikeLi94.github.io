import { Component, OnInit } from '@angular/core';
import { Team } from '../../shared/team';
import { TeamsService } from '../../shared/teams.service';
import { NgClass } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  teams: Team[];

  public division = 'All';
  public region = 'All';
  public alb = 'general';
  public sort = 'perf';
  public cend = 'DESC';

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamsService.getStandings(this.alb, this.division, this.region, this.sort, this.cend)
      .subscribe(teams => this.teams = teams);
  }

  onClickDiv(division: string) {
    this.division = division;
    this.getTeams();
  }

  onClickReg(region: string) {
    this.region = region;
    this.getTeams();
  }

  onClickAlb(alb: string) {
    this.alb = alb;
    this.region = 'All';
    if (this.alb === 'atlarge' && this.division === 'All') {
      this.division = 'College';
    }
    this.getTeams();
  }

  onClickSort(sort: string) {
    if (sort === this.sort) {
      this.switchCend();
    }
    this.sort = sort;
    this.getTeams();
  }

  switchCend() {
    if (this.cend === 'ASC') {
      this.cend = 'DESC';
    }
    else {
      this.cend = 'ASC';
    }
  }

}
