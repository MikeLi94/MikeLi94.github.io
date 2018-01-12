import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeamsService } from '../../shared/teams.service';
import { Team } from '../../shared/team';

@Component({
  selector: 'app-teampage',
  templateUrl: './teampage.component.html',
  styleUrls: ['./teampage.component.css']
})

export class TeampageComponent implements OnInit {

  team: Team[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teamsService: TeamsService
  ) { }

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    const teamName = this.route.snapshot.paramMap.get('team');
    this.teamsService.getTeam(teamName)
      .subscribe(team => this.team = team);
  }

}
