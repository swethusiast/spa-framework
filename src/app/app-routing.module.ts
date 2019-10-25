import { SettingsComponent } from './settings/settings.component';
import { CountriesComponent } from './countries/countries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
