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

  getStandings(): Observable<Team[]> {
    return this.http.get<Team[]>('http://localhost:8080/standings/general');
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('http://localhost:8080/teams');
  }

  searchTeams(term: string): Observable<Team[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Team[]>('http://localhost:8080/teams/search/' + term);
  }

}
