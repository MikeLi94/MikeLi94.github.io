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

  private baseUrl = 'https://quidstatsjs-env.us-west-2.elasticbeanstalk.com/quid/';

  constructor(private http: HttpClient) { }
  getGames(team: string): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + 'teams/' + team + '/games');
  }

  getEvents(team: string): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl + 'teams/' + team + '/events');
  }

}
