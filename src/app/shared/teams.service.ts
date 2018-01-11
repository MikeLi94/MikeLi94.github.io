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

  getTeams(): Observable<Team[]> {
    return this.http.get('http://localhost:8080/');
  }

}
