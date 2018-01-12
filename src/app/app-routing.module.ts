import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StandingsComponent } from './components/standings/standings.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeampageComponent } from './components/teampage/teampage.component';

const routes: Routes = [
  { path: '',   redirectTo: 'standings', pathMatch: 'full' },
  { path: 'standings', component: StandingsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:team', component: TeampageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

