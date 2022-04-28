import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DriversFeatureComponent} from './features/drivers/drivers.component';
import {HomeFeatureComponent} from './features/home/home.component';
import {SeasonsFeatureComponent} from './features/seasons/seasons.component';
import {CircuitsFeatureComponent} from './features/circuits/circuits.component';

const routes: Routes = [
  {path: '', component: HomeFeatureComponent},
  {path: 'drivers', component: DriversFeatureComponent},
  {path: 'seasons', component: SeasonsFeatureComponent},
  {path: 'circuits', component: CircuitsFeatureComponent}
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
