import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Team } from './team';

@Injectable()
export class TeamsService {
  constructor(private http: HttpClient) { }

  // getStandings(atLarge: string, division: string, region: string): Observable<Team[]> {
  //   return this.http.get<Team[]>('http://localhost:8080/standings/' + atLarge + '/' + division + '/' + region );
  // }

  private baseUrl = 'http://quidstatsjs-env.us-west-2.elasticbeanstalk.com/quid/';
  // private baseUrl = 'http://localhost:3000/quid/';
  // private baseUrl = this.base + 'quid/';

  getStandings(atLarge: string, division: string, region: string, sort: string, cend: string): Observable<Team[]> {
    return this.http.get<Team[]>( this.baseUrl + 'standings/' + atLarge + '/' + division + '/' + region + '/' + sort + '/' + cend );
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl + 'teams');
  }

  getTeam(team: string): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl + 'teams/' + team);
  }

  getTeamNames(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl + 'getTeams/');
  }

  searchTeams(term: string): Observable<Team[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http
    .get<Team[]>(this.baseUrl + '/teams/search/' + term);
  }

}
