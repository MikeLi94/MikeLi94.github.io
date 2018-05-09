import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Game } from '../../shared/game';
import { Event } from '../../shared/event';
import { TimePipe } from './time.pipe';

import { GamesService } from '../../shared/games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games: Game[];
  events: Event[];
  teamName = this.route.snapshot.paramMap.get('team');

  constructor(
    public gamesService: GamesService,
    public route: ActivatedRoute,
    public location: Location) { }

  ngOnInit() {
    this.getEvents();
    this.getGames();
  }

  getEvents(): void {
    const teamName = this.route.snapshot.paramMap.get('team');
    this.gamesService.getEvents(teamName)
      .subscribe(arg => this.events = arg);
  }

  getGames(): void {
    const teamName = this.route.snapshot.paramMap.get('team');
    this.gamesService.getGames(teamName)
      .subscribe(arg => this.games = arg);
  }

}
