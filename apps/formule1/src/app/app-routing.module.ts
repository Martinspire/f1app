import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DriversComponent} from './features/drivers/drivers.component';
import {HomeComponent} from './features/home/home.component';
import {SeasonsComponent} from './features/seasons/seasons.component';
import {TracksComponent} from './features/tracks/tracks.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'drivers', component: DriversComponent},
  {path: 'seasons', component: SeasonsComponent},
  {path: 'tracks', component: TracksComponent}
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
