import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeampageComponent } from './teampage/teampage.component'
import { TeamSelectorComponent } from './team-selector/team-selector.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  {path: 'team/:team', component : TeampageComponent},
  {path: 'dashboard/:team', component : DashboardComponent},
  {path: '', component : TeamSelectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
