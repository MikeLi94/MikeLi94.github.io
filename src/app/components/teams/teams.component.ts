import { Component, OnInit } from '@angular/core';
import { Team } from '../../shared/team';
import { TeamsService } from '../../shared/teams.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  public p = 1;

  teams: Team[];

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamsService.getTeams()
      .subscribe(teams => this.teams = teams);
  }

}


