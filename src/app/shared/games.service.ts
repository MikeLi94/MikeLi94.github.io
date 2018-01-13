import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Game } from './game';
import { Event } from './event';

@Injectable()
export class GamesService {

  constructor(private http: HttpClient) { }
  getGames(team: string): Observable<Game[]> {
    return this.http.get<Game[]>('http://localhost:8080/teams/' + team + '/games');
  }

  getEvents(team: string): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:8080/teams/' + team + '/events');
  }

}
