import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CircuitsFeatureComponent} from './features/circuits/circuits.component';
import { CircuitDetailFeatureComponent } from './features/circuits/circuit-detail-feature/circuit-detail-feature.component';
import {DriversFeatureComponent} from './features/drivers/drivers.component';
import { DriverDetailFeatureComponent } from './features/drivers/driver-detail-feature/driver-detail-feature.component';
import {HomeFeatureComponent} from './features/home/home.component';
import {SeasonsFeatureComponent} from './features/seasons/seasons.component';
import { SeasonDetailFeatureComponent } from './features/seasons/season-detail-feature/season-detail-feature.component';

const routes: Routes = [
  {path: '', component: HomeFeatureComponent},
  {path: 'circuits', component: CircuitsFeatureComponent},
  {path: 'circuits/:circuit', component: CircuitDetailFeatureComponent},
  {path: 'drivers', component: DriversFeatureComponent},
  {path: 'drivers/:driver', component: DriverDetailFeatureComponent},
  {path: 'seasons', component: SeasonsFeatureComponent},
  {path: 'seasons/:season', component: SeasonDetailFeatureComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
