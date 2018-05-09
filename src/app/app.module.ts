import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { StandingsComponent } from './components/standings/standings.component';
import { TeamsComponent } from './components/teams/teams.component';

import { TeamsService } from './shared/teams.service';
import { ClubPipe } from './components/teams/club.pipe';
import { SearchComponent } from './components/layout/search/search.component';
import { TeampageComponent } from './components/teampage/teampage.component';
import { GameComponent } from './components/game/game.component';
import { GamesService } from './shared/games.service';
import { ContactComponent } from './components/contact/contact.component';
import { TimePipe } from './components/game/time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StandingsComponent,
    TeamsComponent,
    ClubPipe,
    SearchComponent,
    TeampageComponent,
    GameComponent,
    ContactComponent,
    TimePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule.forRoot()
  ],
  providers: [TeamsService, GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
