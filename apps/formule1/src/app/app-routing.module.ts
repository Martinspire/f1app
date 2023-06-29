import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CircuitDetailFeatureComponent } from './features/circuits/circuit-detail-feature/circuit-detail-feature.component';
import { CircuitsFeatureComponent } from './features/circuits/circuits.component';
import { DriverDetailFeatureComponent } from './features/drivers/driver-detail-feature/driver-detail-feature.component';
import { DriversFeatureComponent } from './features/drivers/drivers.component';
import { HomeFeatureComponent } from './features/home/home.component';
import { RaceCompareFeatureComponent } from './features/races/race-compare/race-compare-feature.component';
import { RaceDetailFeatureComponent } from './features/races/race-detail/race-detail-feature.component';
import { SeasonDetailFeatureComponent } from './features/seasons/season-detail-feature/season-detail-feature.component';
import { SeasonsFeatureComponent } from './features/seasons/seasons.component';

const routes: Routes = [
  { path: '', component: HomeFeatureComponent },
  { path: 'circuits', component: CircuitsFeatureComponent },
  { path: 'circuits/:circuit', component: CircuitDetailFeatureComponent },
  { path: 'drivers', component: DriversFeatureComponent },
  { path: 'drivers/:driver', component: DriverDetailFeatureComponent },
  { path: 'races/:season/:round', component: RaceDetailFeatureComponent },
  { path: 'races/:season/:round/compare', component: RaceCompareFeatureComponent },
  { path: 'seasons', component: SeasonsFeatureComponent },
  { path: 'seasons/:season', component: SeasonDetailFeatureComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      bindToComponentInputs: true
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
