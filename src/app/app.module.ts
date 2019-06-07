import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamSelectorComponent } from './team-selector/team-selector.component';
import { TeampageComponent } from './teampage/teampage.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TwitterblockComponent } from './twitterblock/twitterblock.component';
import { CurrentgamesComponent } from './currentgames/currentgames.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamSelectorComponent,
    TeampageComponent,
    DashboardComponent,
    TwitterblockComponent,
    CurrentgamesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
