import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StandingsComponent } from './components/standings/standings.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeampageComponent } from './components/teampage/teampage.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '',   redirectTo: 'standings', pathMatch: 'full' },
  { path: 'standings', component: StandingsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:team', component: TeampageComponent },
  { path: 'contact', component: ContactComponent},
  { path: '**', component: StandingsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

